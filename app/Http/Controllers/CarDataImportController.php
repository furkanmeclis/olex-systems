<?php

namespace App\Http\Controllers;

use App\Models\CarBrand;
use App\Models\CarModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class CarDataImportController extends Controller
{
    private function insertInChunks($model, $data, $uniqueKey, $updateColumns)
    {
        foreach (array_chunk($data, 500) as $chunk) {
            $model::upsert($chunk, [$uniqueKey], $updateColumns);
        }
    }

    private function downloadAndSaveLogo($brandName)
    {
        try {
            $fileName = Str::slug($brandName) . '.png';
            $path = "uploads/brands/{$fileName}";
            
            // Dosya zaten var mı kontrol et
            if (file_exists(public_path($path))) {
                return url($path);
            }
            
            $logoUrl = "https://www.auto-data.net/img/logos2/{$brandName}.png";
            $response = Http::get($logoUrl);
            
            if ($response->successful()) {
                if (!file_exists(public_path('uploads/brands'))) {
                    mkdir(public_path('uploads/brands'), 0777, true);
                }
                
                file_put_contents(public_path($path), $response->body());
                return url($path);
            }
            
            return null;
        } catch (\Exception $e) {
            Log::error('Logo indirme hatası: ' . $e->getMessage());
            return null;
        }
    }

    public function brands()
    {
        $brands = CarBrand::withCount(['models'])->get();
        return Inertia::render('Cars/Brands/Index', [
            'brands' => $brands
        ]);
    }

    public function storeBrand(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'is_active' => 'required|boolean',
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,svg|max:2048'
        ], [
            'name.required' => 'Marka adı zorunludur.',
            'name.string' => 'Marka adı metin olmalıdır.',
            'name.max' => 'Marka adı en fazla 255 karakter olabilir.',
            'is_active.required' => 'Durum alanı zorunludur.',
            'is_active.boolean' => 'Durum alanı geçerli değil.',
            'logo.image' => 'Logo bir resim dosyası olmalıdır.',
            'logo.mimes' => 'Logo jpeg, png, jpg veya svg formatında olmalıdır.',
            'logo.max' => 'Logo boyutu en fazla 2MB olabilir.'
        ]);

        $logoUrl = null;
        if ($request->hasFile('logo')) {
            $fileName = Str::slug($request->name) . '.' . $request->file('logo')->getClientOriginalExtension();
            $request->file('logo')->move(public_path('uploads/brands'), $fileName);
            $logoUrl = url('uploads/brands/' . $fileName);
        }

        $brand = CarBrand::create([
            'name' => $request->name,
            'external_id' => Str::slug($request->name) . '-' . Str::random(6),
            'is_active' => filter_var($request->is_active, FILTER_VALIDATE_BOOLEAN),
            'logo' => $logoUrl,
            'last_update' => now()
        ]);

        return response()->json([
            'message' => 'Marka başarıyla eklendi',
            'brand' => $brand
        ]);
    }

    public function updateBrand(Request $request, CarBrand $brand)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'is_active' => 'required|boolean',
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,svg|max:2048'
        ], [
            'name.required' => 'Marka adı zorunludur.',
            'name.string' => 'Marka adı metin olmalıdır.',
            'name.max' => 'Marka adı en fazla 255 karakter olabilir.',
            'is_active.required' => 'Durum alanı zorunludur.',
            'is_active.boolean' => 'Durum alanı geçerli değil.',
            'logo.image' => 'Logo bir resim dosyası olmalıdır.',
            'logo.mimes' => 'Logo jpeg, png, jpg veya svg formatında olmalıdır.',
            'logo.max' => 'Logo boyutu en fazla 2MB olabilir.'
        ]);

        $data = [
            'name' => $request->name,
            'external_id' => Str::slug($request->name) . '-' . Str::random(6),
            'is_active' => filter_var($request->is_active, FILTER_VALIDATE_BOOLEAN),
            'last_update' => now()
        ];

        if ($request->hasFile('logo')) {
            // Eski logoyu sil
            if ($brand->logo) {
                $oldPath = str_replace(url('/'), public_path(), $brand->logo);
                if (file_exists($oldPath)) {
                    unlink($oldPath);
                }
            }

            $fileName = Str::slug($request->name) . '.' . $request->file('logo')->getClientOriginalExtension();
            $request->file('logo')->move(public_path('uploads/brands'), $fileName);
            $data['logo'] = url('uploads/brands/' . $fileName);
        }

        $brand->update($data);

        return response()->json([
            'message' => 'Marka başarıyla güncellendi',
            'brand' => $brand
        ]);
    }

    public function destroyBrand(CarBrand $brand)
    {
        try {
            DB::beginTransaction();
            
            // İlişkili kayıtları sil
            $brand->models()->delete();
            $brand->delete();
            
            DB::commit();
            return response()->json(['message' => 'Marka ve ilişkili tüm kayıtlar başarıyla silindi']);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Marka silinirken hata:', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            return response()->json(['error' => 'Marka silinirken bir hata oluştu'], 500);
        }
    }

    public function models(CarBrand $brand)
    {
        $models = CarModel::with(['brand'])
            ->where('brand_id', $brand->id)
            ->get();
        
        return Inertia::render('Cars/Models/Index', [
            'models' => $models,
            'brand' => $brand
        ]);
    }

    public function storeModel(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'brand_id' => 'required|exists:car_brands,id',
            'is_active' => 'required|boolean'
        ], [
            'name.required' => 'Model adı zorunludur.',
            'name.string' => 'Model adı metin olmalıdır.',
            'name.max' => 'Model adı en fazla 255 karakter olabilir.',
            'brand_id.required' => 'Marka seçimi zorunludur.',
            'brand_id.exists' => 'Seçilen marka bulunamadı.',
            'is_active.required' => 'Durum alanı zorunludur.',
            'is_active.boolean' => 'Durum alanı geçerli değil.'
        ]);

        $model = CarModel::create([
            'name' => $request->name,
            'brand_id' => $request->brand_id,
            'external_id' => Str::slug($request->name) . '-' . Str::random(6),
            'is_active' => filter_var($request->is_active, FILTER_VALIDATE_BOOLEAN),
            'last_update' => now()
        ]);

        $model->load('brand');

        return response()->json([
            'message' => 'Model başarıyla eklendi',
            'model' => $model
        ]);
    }

    public function updateModel(Request $request, CarModel $model)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'brand_id' => 'required|exists:car_brands,id',
            'is_active' => 'required|boolean'
        ], [
            'name.required' => 'Model adı zorunludur.',
            'name.string' => 'Model adı metin olmalıdır.',
            'name.max' => 'Model adı en fazla 255 karakter olabilir.',
            'brand_id.required' => 'Marka seçimi zorunludur.',
            'brand_id.exists' => 'Seçilen marka bulunamadı.',
            'is_active.required' => 'Durum alanı zorunludur.',
            'is_active.boolean' => 'Durum alanı geçerli değil.'
        ]);

        $model->update([
            'name' => $request->name,
            'brand_id' => $request->brand_id,
            'external_id' => Str::slug($request->name) . '-' . Str::random(6),
            'is_active' => filter_var($request->is_active, FILTER_VALIDATE_BOOLEAN),
            'last_update' => now()
        ]);

        $model->load('brand');

        return response()->json([
            'message' => 'Model başarıyla güncellendi',
            'model' => $model
        ]);
    }

    public function destroyModel(CarModel $model)
    {
        try {
            DB::beginTransaction();
            $model->delete();
            DB::commit();
            
            return response()->json(['message' => 'Model başarıyla silindi']);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Model silinirken hata:', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            return response()->json(['error' => 'Model silinirken bir hata oluştu'], 500);
        }
    }

    public function import()
    {
        try {
            $jsonPath = resource_path('js/car_data.json');
            $jsonContent = file_get_contents($jsonPath);
            $data = json_decode($jsonContent, true);

            if (!$data || !isset($data['brands']['brand'])) {
                return response()->json(['error' => 'Geçersiz JSON formatı'], 400);
            }

            DB::beginTransaction();

            // Markaları hazırla
            $brands = [];
            foreach ($data['brands']['brand'] as $brandData) {
                $logoUrl = $this->downloadAndSaveLogo($brandData['name']);
                
                $brands[] = [
                    'external_id' => $brandData['id'],
                    'name' => $brandData['name'],
                    'logo' => $logoUrl,
                    'last_update' => $brandData['update'],
                    'is_active' => true,
                    'created_at' => now(),
                    'updated_at' => now()
                ];
            }

            // Batch insert markaları
            $this->insertInChunks(CarBrand::class, $brands, 'external_id', ['name', 'logo', 'last_update', 'is_active']);

            // Modelleri hazırla
            $models = [];
            foreach ($data['brands']['brand'] as $brandData) {
                if (isset($brandData['models']['model'])) {
                    $brand = CarBrand::where('external_id', $brandData['id'])->first();
                    foreach ($brandData['models']['model'] as $modelData) {
                        $models[] = [
                            'external_id' => $modelData['id'],
                            'brand_id' => $brand->id,
                            'name' => $modelData['name'],
                            'last_update' => $modelData['update'],
                            'is_active' => true,
                            'created_at' => now(),
                            'updated_at' => now()
                        ];
                    }
                }
            }

            // Batch insert modelleri
            $this->insertInChunks(CarModel::class, $models, 'external_id', ['brand_id', 'name', 'last_update', 'is_active']);

            DB::commit();
            return response()->json(['message' => 'Veri aktarımı başarıyla tamamlandı']);

        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Veri aktarımı sırasında hata:', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            return response()->json([
                'error' => 'Veri aktarımı sırasında bir hata oluştu',
                'error_message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
            ], 500);
        }
    }

    public function reset()
    {
        try {
            DB::beginTransaction();
            
            CarModel::truncate();
            CarBrand::truncate();
            
            DB::commit();
            return response()->json(['message' => 'Tüm veriler başarıyla silindi']);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Veri sıfırlama sırasında hata:', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            return response()->json(['error' => 'Veri sıfırlama sırasında bir hata oluştu'], 500);
        }
    }

    public function importStatus()
    {
        $stats = [
            'brands' => CarBrand::count(),
            'models' => CarModel::count(),
        ];

        return response()->json($stats);
    }

    public function getBrands()
    {
        $brands = CarBrand::where('is_active', true)
            ->orderBy('name')
            ->get(['id', 'name', 'logo']);

        return response()->json($brands);
    }

    public function getModels(CarBrand $brand)
    {
        $models = CarModel::where('brand_id', $brand->id)
            ->where('is_active', true)
            ->orderBy('name')
            ->get(['id', 'name']);

        return response()->json($models);
    }

    public function bulkStatusBrands(Request $request)
    {
        $request->validate([
            'ids' => 'required|array',
            'ids.*' => 'exists:car_brands,id',
            'status' => 'required|boolean'
        ], [
            'ids.required' => 'En az bir marka seçmelisiniz.',
            'ids.*.exists' => 'Seçilen markalardan bazıları bulunamadı.',
            'status.required' => 'Durum belirtilmelidir.',
            'status.boolean' => 'Durum değeri geçersiz.'
        ]);

        try {
            DB::beginTransaction();
            
            // Markaları güncelle
            CarBrand::whereIn('id', $request->ids)
                ->update(['is_active' => $request->status]);
            
            // Eğer deaktif ediliyorsa, bağlı modelleri de deaktif et
            if (!$request->status) {
                CarModel::whereIn('brand_id', $request->ids)
                    ->update(['is_active' => false]);
            }
            
            DB::commit();
            
            return response()->json([
                'message' => 'Markalar başarıyla güncellendi'
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Toplu marka güncelleme hatası:', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            return response()->json(['error' => 'İşlem sırasında bir hata oluştu'], 500);
        }
    }

    public function bulkStatusModels(Request $request, CarBrand $brand)
    {
        $request->validate([
            'ids' => 'required|array',
            'ids.*' => 'exists:car_models,id',
            'status' => 'required|boolean'
        ], [
            'ids.required' => 'En az bir model seçmelisiniz.',
            'ids.*.exists' => 'Seçilen modellerden bazıları bulunamadı.',
            'status.required' => 'Durum belirtilmelidir.',
            'status.boolean' => 'Durum değeri geçersiz.'
        ]);

        try {
            CarModel::whereIn('id', $request->ids)
                ->where('brand_id', $brand->id)
                ->update(['is_active' => $request->status]);
            
            return response()->json([
                'message' => 'Modeller başarıyla güncellendi'
            ]);
        } catch (\Exception $e) {
            Log::error('Toplu model güncelleme hatası:', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            return response()->json(['error' => 'İşlem sırasında bir hata oluştu'], 500);
        }
    }
}
