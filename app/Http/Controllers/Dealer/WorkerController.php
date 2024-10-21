<?php

namespace App\Http\Controllers\Dealer;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;

class WorkerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Dealer/Workers/Index',[
            "workersAll" => auth()->user()->workers(),
            "dealer" => auth()->user()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $controlEmail = User::where('email', $request->get('email'))->first();
        if ($controlEmail) {
            return response()->json(['message' => 'Bu e-posta adresi zaten kullanımda.Lütfen başka bir mail adresi giriniz.', 'status' => false]);
        }
        $dealer = User::find($request->get('dealer_id'));
        if (!$dealer) {
            return response()->json(['message' => 'Bayi bulunamadı.', 'status' => false]);
        }
        $worker = new User();
        $worker->name = $request->get('name');
        $worker->email = $request->get('email');
        $worker->phone = $request->get('phone');
        $worker->parent_id = auth()->user()->id;
        $worker->role = 'worker';
        $worker->password = Hash::make($request->get('password'));
        $worker->active = $request->get('active') == 'true' ? 1 : 0;
        if (request()->hasFile('image')) {
            $fileName = Str::uuid().".".$request->file('image')->getClientOriginalExtension();
            $request->file('image')->move(public_path("uploads/worker_avatars"), $fileName);
            $worker->avatar = url(("uploads/worker_avatars/").$fileName);
        } else {
            $worker->avatar = 'avatars/default.png';
        }
        if ($worker->save()) {
            $hasPage = $request->has('hasPage') ? $request->get('hasPage') : false;
            return response()->json(['message' => 'Çalışan başarıyla eklendi.', 'status' => true, 'workers' => $dealer->workers(), 'worker_id' => $worker->id]);
        } else {

            return response()->json(['message' => 'Çalışan eklenirken bir hata oluştu.', 'status' => false]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): \Illuminate\Http\JsonResponse
    {
        $worker = User::find($id);
        if ($worker) {
            $dealer = User::find($worker->parent_id);
            if ($worker->email != $request->get('email')) {
                $controlEmail = User::where('email', $request->get('email'))->first();
                if ($controlEmail) {
                    return response()->json(['message' => 'Bu e-posta adresi zaten kullanımda.Lütfen başka bir mail adresi giriniz.', 'status' => false]);
                }
            }
            $worker->name = $request->get('name');
            $worker->email = $request->get('email');
            $worker->phone = $request->get('phone');
            $worker->active = $request->get('active') == 'true' ? 1 : 0;
            if ($request->hasFile('image')) {
                $fileName = Str::uuid().".".$request->file('image')->getClientOriginalExtension();
                $request->file('image')->move(public_path("uploads/worker_avatars"), $fileName);
                $worker->avatar = url(("uploads/worker_avatars/").$fileName);
            }
            if ($request->get('reset_password') == 1) {
                $worker->password = Hash::make($request->get('password'));
            }
            if ($worker->save()) {
                $hasPage = $request->has('hasPage') ? $request->get('hasPage') : false;
                return response()->json(['message' => 'Çalışan başarıyla güncellendi.', 'status' => true, 'workers' => $dealer->workers()]);
            } else {
                return response()->json(['message' => 'Çalışan güncellenirken bir hata oluştu.', 'status' => false]);
            }
        } else {
            return response()->json(['message' => 'Bu Id\'ye sahip bir çalışan bulunamadı.'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $worker = User::find($id);
        if ($worker) {
            $image = $worker->avatar;
            if ($worker->delete()) {
                return response()->json(['message' => 'Çalışan başarıyla silindi.']);
            } else {
                return response()->json(['message' => 'Çalışan silinirken bir hata oluştu.'], 500);
            }
        } else {
            return response()->json(['message' => 'Bu Id\'ye sahip bir çalışan bulunamadı.'], 404);
        }
    }

    public function multipleDestroy()
    {
        $dealerId = request()->get('dealerId');
        $workerIds = request()->get('workerIds');
        $instance = User::where('parent_id', $dealerId)->whereIn('id', $workerIds);
        $workersCount = $instance->count();
        $deleted = $instance->delete();
        if ($deleted) {
            return response()->json(['message' => $workersCount . ' çalışan başarıyla silindi']);
        } else {
            return response()->json(['message' => 'Çalışanlar silinirken bir hata oluştu.'], 404);
        }

    }
}
