<?php

use App\Http\Controllers\ProfileController;
use App\Models\ProductCode;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get("/import-products", function () {
    $productsJson = file_get_contents(public_path('products.json'));
    $products = json_decode($productsJson);
    $createdProductNames = [];
    foreach ($products as $product) {
        if (!in_array($product->name, $createdProductNames)) {
            $newProduct = new \App\Models\Products();
            $newProduct->name = $product->product_name;
            $newProduct->sku = $product->product_sku;
            $newProduct->warranty = "1 Yıl";
            $newProduct->price = 0;
            $newProduct->category = $product->product_category;
            $newProduct->image = "https://www.olexfilms.app/uploads/products_images/a482b0a9-c5f8-41e0-8550-9e14ef4c25f0.png";
            $newProduct->description = $product->product_name;
            if ($newProduct->save()) {
                $createdProductNames[$product->product_name] = $newProduct->id;
                $newCode = new \App\Models\ProductCode();
                $newCode->product_id = $newProduct->id;
                $newCode->code = $product->product_code;
                $newCode->used = 0;
                $newCode->save();
            }
        } else {
            $product_id = $createdProductNames[$product->product_name];
            $newCode = new \App\Models\ProductCode();
            $newCode->product_id = $product_id;
            $newCode->code = $product->product_code;
            $newCode->used = 0;
            $newCode->save();
        }
    }
    return response()->json(['message' => 'Ürünler başarılı bir şekilde eklendi']);
});

Route::get('/dashboard', [\App\Http\Controllers\HomeController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/optimize:clear', function () {
    Artisan::call('optimize:clear');
});
Route::get('/install:app:olex', function () {
    Artisan::call('storage:link');
    //Artisan::call('migrate:fresh');
    //Artisan::call('db:seed');
    return redirect()->route('dashboard')->with('success', 'Uygulama oluşturuldu');
});
Route::get('/customer-page/{mail}', function ($mail) {
    $customer = \App\Models\Customers::where('email', $mail)->first();
    $hash = Crypt::encrypt($customer->id);
    return redirect()->route('customer.notify', $hash);
});
Route::get('/db:seed', function () {
    Artisan::call('db:seed');
    return redirect()->route('dashboard')->with('success', 'Demo verileri başarılı bir şekilde eklendi.');
});
Route::middleware('auth')->group(function () {
    Route::get('/view:clear', function () {
        Artisan::call('view:clear');
        Artisan::call('optimize:clear');
        Artisan::call('config:clear');
        Artisan::call('route:clear');
        Artisan::call('cache:clear');
        return;
    });

    Route::get('/migrate:fresh', function () {
        Artisan::call('migrate:fresh');
        //Artisan::call('db:seed');
        return redirect()->route('dashboard')->with('success', 'Veritabanı sıfırlandı ve başarılı bir şekilde yeniden oluşturuldu.Demo verileri eklendi.');

    });
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::prefix('/super')->name('super.')->group(function () {
        /*
         * SUPER ROLES ROUTES
         */
        Route::resource('/central-users', \App\Http\Controllers\Super\CentralController::class)->names([
            'index' => 'central.index',
            'create' => 'central.create',
            'store' => 'central.store',
            'show' => 'central.show',
            'edit' => 'central.edit',
            'update' => 'central.update',
            'destroy' => 'central.destroy',
        ]);
        Route::post('/central-users/multiple-destroy', [\App\Http\Controllers\Super\CentralController::class, 'multipleDestroy'])->name('central.multipleDestroy');
        /*
         * DEALERS ROUTES
         */
        Route::resource('/dealers', \App\Http\Controllers\Super\Dealer::class)->names([
            'index' => 'dealers.index',
            'create' => 'dealers.create',
            'store' => 'dealers.store',
            'show' => 'dealers.show',
            'edit' => 'dealers.edit',
            'update' => 'dealers.update',
            'destroy' => 'dealers.destroy',
        ]);
        Route::post('/dealers/multiple-destroy', [\App\Http\Controllers\Super\Dealer::class, 'multipleDestroy'])->name('dealers.multipleDestroy');
        Route::put('/dealers/{id}/update-details', [\App\Http\Controllers\Super\Dealer::class, 'updateDetails'])->name('dealers.updateDetails');
        Route::post('/dealers/list-all', [\App\Http\Controllers\Super\Dealer::class, 'listAll'])->name('dealers.listAll');
        /*
         *  PRODUCTS ROUTES
         */
        Route::resource('/products', \App\Http\Controllers\Super\ProductController::class)->names([
            'index' => 'products.index',
            'create' => 'products.create',
            'store' => 'products.store',
            'show' => 'products.show',
            'edit' => 'products.edit',
            'update' => 'products.update',
            'destroy' => 'products.destroy',
        ]);
        Route::post('/products/list-all', [\App\Http\Controllers\Super\ProductController::class, 'listAll'])->name('products.listAll');
        Route::post('/products/control-sku', [\App\Http\Controllers\Super\ProductController::class, 'controlSku'])->name('products.controlSku');
        Route::post('/products/multiple-destroy', [\App\Http\Controllers\Super\ProductController::class, 'multipleDestroy'])->name('products.multipleDestroy');
        Route::post('/categories/store', [\App\Http\Controllers\Super\ProductController::class, 'storeCategory'])->name('categories.store');
        Route::put('/categories/{id}/update', [\App\Http\Controllers\Super\ProductController::class, 'updateCategory'])->name('categories.update');
        Route::delete('/categories/{id}/delete', [\App\Http\Controllers\Super\ProductController::class, 'deleteCategory'])->name('categories.delete');
        Route::post('/products/{id}/list-codes', [\App\Http\Controllers\Super\ProductController::class, 'listCodes'])->name('products.listCodes');
        Route::post('/products/{id}/add-code', [\App\Http\Controllers\Super\ProductController::class, 'addCode'])->name('products.addCode');
        Route::put('/products/{id}/update-code', [\App\Http\Controllers\Super\ProductController::class, 'updateCode'])->name('products.updateCode');
        Route::delete('/products/{id}/delete-code', [\App\Http\Controllers\Super\ProductController::class, 'deleteCode'])->name('products.deleteCode');

        /*
         * ORDERS ROUTES
         */
        Route::resource('/orders', \App\Http\Controllers\Super\OrdersController::class)->names([
            'index' => 'orders.index',
            'create' => 'orders.create',
            'store' => 'orders.store',
            'show' => 'orders.show',
            'edit' => 'orders.edit',
            'update' => 'orders.update',
            'destroy' => 'orders.destroy',
        ]);
        Route::post('/orders/{id}/list-product-codes', [\App\Http\Controllers\Super\OrdersController::class, 'listProductCodes'])->name('orders.listProductCodes');
        Route::put('/orders/{id}/update-product-codes', [\App\Http\Controllers\Super\OrdersController::class, 'updateProductCodes'])->name('orders.updateProductCodes');
        Route::post('/orders/trash-list-all', [\App\Http\Controllers\Super\OrdersController::class, 'trashAll'])->name('orders.trashAll');
        Route::put('/orders/{id}/status-update', [App\Http\Controllers\Super\OrdersController::class, 'updateStatus'])->name('orders.statusUpdate');
        Route::post('/products/multiple-destroy', [\App\Http\Controllers\Super\OrdersController::class, 'multipleDestroy'])->name('orders.multipleDestroy');
        Route::post('/products/restore', [\App\Http\Controllers\Super\OrdersController::class, 'restore'])->name('orders.restore');
        /*
         *  STOCK MANAGEMENT ROUTES
         */
        Route::get('/stock-management', [\App\Http\Controllers\Super\StockManagamentController::class, 'index'])->name('stock-management.index');
        Route::put('/stock-management/{id}/update', [\App\Http\Controllers\Super\StockManagamentController::class, 'update'])->name('stock-management.update');
        /*
         *  WORKERS ROUTES
         */
        Route::resource('/workers', \App\Http\Controllers\Super\Worker::class)->names([
            'index' => 'workers.index',
            'create' => 'workers.create',
            'store' => 'workers.store',
            'show' => 'workers.show',
            'edit' => 'workers.edit',
            'update' => 'workers.update',
            'destroy' => 'workers.destroy',
        ]);
        Route::post('/workers/multiple-destroy', [\App\Http\Controllers\Super\Worker::class, 'multipleDestroy'])->name('workers.multipleDestroy');
        Route::resource('/customers', \App\Http\Controllers\Super\CustomersController::class)->names([
            'index' => 'customers.index',
            'create' => 'customers.create',
            'store' => 'customers.store',
            'show' => 'customers.show',
            'edit' => 'customers.edit',
            'update' => 'customers.update',
            'destroy' => 'customers.destroy',
        ]);
        Route::post('/customers/multiple-destroy', [\App\Http\Controllers\Super\CustomersController::class, 'multipleDestroy'])->name('customers.multipleDestroy');


    });
    /*
     * ----------------------------------------------
     *                 CENTRAL ROLE
     * ----------------------------------------------
     */
    Route::prefix('/central')->name("central.")->group(function () {

        /*
         * DEALERS ROUTES
         */
        Route::resource('/dealers', \App\Http\Controllers\Central\Dealer::class)->names([
            'index' => 'dealers.index',
            'create' => 'dealers.create',
            'store' => 'dealers.store',
            'show' => 'dealers.show',
            'edit' => 'dealers.edit',
            'update' => 'dealers.update',
            'destroy' => 'dealers.destroy',
        ]);
        Route::post('/dealers/multiple-destroy', [\App\Http\Controllers\Central\Dealer::class, 'multipleDestroy'])->name('dealers.multipleDestroy');
        Route::put('/dealers/{id}/update-details', [\App\Http\Controllers\Central\Dealer::class, 'updateDetails'])->name('dealers.updateDetails');
        Route::post('/dealers/list-all', [\App\Http\Controllers\Central\Dealer::class, 'listAll'])->name('dealers.listAll');
        /*
         *  PRODUCTS ROUTES
         */
        Route::resource('/products', \App\Http\Controllers\Central\ProductController::class)->names([
            'index' => 'products.index',
            'create' => 'products.create',
            'store' => 'products.store',
            'show' => 'products.show',
            'edit' => 'products.edit',
            'update' => 'products.update',
            'destroy' => 'products.destroy',
        ]);
        Route::post('/products/list-all', [\App\Http\Controllers\Central\ProductController::class, 'listAll'])->name('products.listAll');
        Route::post('/products/control-sku', [\App\Http\Controllers\Central\ProductController::class, 'controlSku'])->name('products.controlSku');
        Route::post('/products/multiple-destroy', [\App\Http\Controllers\Central\ProductController::class, 'multipleDestroy'])->name('products.multipleDestroy');
        Route::post('/categories/store', [\App\Http\Controllers\Central\ProductController::class, 'storeCategory'])->name('categories.store');
        Route::put('/categories/{id}/update', [\App\Http\Controllers\Central\ProductController::class, 'updateCategory'])->name('categories.update');
        Route::delete('/categories/{id}/delete', [\App\Http\Controllers\Central\ProductController::class, 'deleteCategory'])->name('categories.delete');
        Route::post('/products/{id}/list-codes', [\App\Http\Controllers\Central\ProductController::class, 'listCodes'])->name('products.listCodes');
        Route::post('/products/{id}/add-code', [\App\Http\Controllers\Central\ProductController::class, 'addCode'])->name('products.addCode');
        Route::put('/products/{id}/update-code', [\App\Http\Controllers\Central\ProductController::class, 'updateCode'])->name('products.updateCode');
        Route::delete('/products/{id}/delete-code', [\App\Http\Controllers\Central\ProductController::class, 'deleteCode'])->name('products.deleteCode');

        /*
         * ORDERS ROUTES
         */
        Route::resource('/orders', \App\Http\Controllers\Central\OrdersController::class)->names([
            'index' => 'orders.index',
            'create' => 'orders.create',
            'store' => 'orders.store',
            'show' => 'orders.show',
            'edit' => 'orders.edit',
            'update' => 'orders.update',
            'destroy' => 'orders.destroy',
        ]);
        Route::post('/orders/{id}/list-product-codes', [\App\Http\Controllers\Central\OrdersController::class, 'listProductCodes'])->name('orders.listProductCodes');
        Route::put('/orders/{id}/update-product-codes', [\App\Http\Controllers\Central\OrdersController::class, 'updateProductCodes'])->name('orders.updateProductCodes');
        Route::post('/orders/trash-list-all', [\App\Http\Controllers\Central\OrdersController::class, 'trashAll'])->name('orders.trashAll');
        Route::put('/orders/{id}/status-update', [\App\Http\Controllers\Central\OrdersController::class, 'updateStatus'])->name('orders.statusUpdate');
        Route::post('/products/multiple-destroy', [\App\Http\Controllers\Central\OrdersController::class, 'multipleDestroy'])->name('orders.multipleDestroy');
        Route::post('/products/restore', [\App\Http\Controllers\Central\OrdersController::class, 'restore'])->name('orders.restore');
        /*
         *  STOCK MANAGEMENT ROUTES
         */
        Route::get('/stock-management', [\App\Http\Controllers\Central\StockManagamentController::class, 'index'])->name('stock-management.index');
        Route::put('/stock-management/{id}/update', [\App\Http\Controllers\Central\StockManagamentController::class, 'update'])->name('stock-management.update');
        /*
         *  WORKERS ROUTES
         */
        Route::resource('/workers', \App\Http\Controllers\Central\Worker::class)->names([
            'index' => 'workers.index',
            'create' => 'workers.create',
            'store' => 'workers.store',
            'show' => 'workers.show',
            'edit' => 'workers.edit',
            'update' => 'workers.update',
            'destroy' => 'workers.destroy',
        ]);
        Route::post('/workers/multiple-destroy', [\App\Http\Controllers\Central\Worker::class, 'multipleDestroy'])->name('workers.multipleDestroy');
        Route::resource('/customers', \App\Http\Controllers\Central\CustomersController::class)->names([
            'index' => 'customers.index',
            'create' => 'customers.create',
            'store' => 'customers.store',
            'show' => 'customers.show',
            'edit' => 'customers.edit',
            'update' => 'customers.update',
            'destroy' => 'customers.destroy',
        ]);
        Route::post('/customers/multiple-destroy', [\App\Http\Controllers\Central\CustomersController::class, 'multipleDestroy'])->name('customers.multipleDestroy');

    });
    /*
     * ----------------------------------------------
     * |               DEALER ROLE                  |
     * ----------------------------------------------
     */
    Route::prefix("/dealer")->name("dealer.")->group(function () {
        Route::get('/', [\App\Http\Controllers\Dealer\DealerHomeController::class, 'index'])->name('index');
        Route::get("/settings", [\App\Http\Controllers\Dealer\DealerHomeController::class, 'settings'])->name('settings');
        Route::get("/workers", [\App\Http\Controllers\Dealer\DealerHomeController::class, 'workers'])->name('workers');
        Route::get("/services", [\App\Http\Controllers\Dealer\DealerHomeController::class, 'services'])->name('services');
        Route::get("/stock-records", [\App\Http\Controllers\Dealer\DealerHomeController::class, 'stockRecords'])->name('stockRecords');
        Route::get("/customers", [\App\Http\Controllers\Dealer\DealerHomeController::class, 'customers'])->name('customers');
        Route::get("/orders", [\App\Http\Controllers\Dealer\DealerHomeController::class, 'orders'])->name('orders');
        Route::put("/customers/{id}/update", [\App\Http\Controllers\Dealer\DealerHomeController::class, 'updateCustomer'])->name('customers.update');
        Route::put("/dealer-details/{id}/update", [\App\Http\Controllers\Dealer\DealerHomeController::class, 'updateDetails'])->name('dealers.updateDetails');
        Route::resource('/workers', \App\Http\Controllers\Dealer\WorkerController::class)->names([
            'index' => 'workers.index',
            'create' => 'workers.create',
            'store' => 'workers.store',
            'show' => 'workers.show',
            'edit' => 'workers.edit',
            'update' => 'workers.update',
            'destroy' => 'workers.destroy',
        ]);
    });
    /*
     * ----------------------------------------------
     * |               WORKER ROLE                  |
     * ----------------------------------------------
     */
    Route::prefix('/worker')->name("worker.")->group(function () {
        Route::get('/send/{token}/{message}', function ($token, $message) {
            $notify = new \App\Notifications\FirebaseNotification("OLEX Films®", "$message", "$token");
            $notify->sendPushNotification();
            return response()->json(['message' => 'MESAJ GİTTİ']);
        });
        Route::get('/', [\App\Http\Controllers\Worker\WorkerHomeController::class, 'index'])->name('index');
        Route::resource('/customers', \App\Http\Controllers\Worker\CustomersController::class)->names([
            'index' => 'customers.index',
            'create' => 'customers.create',
            'store' => 'customers.store',
            'show' => 'customers.show',
            'edit' => 'customers.edit',
            'update' => 'customers.update',
            'destroy' => 'customers.destroy',
        ]);
        Route::post('/customers/get-all', [\App\Http\Controllers\Worker\CustomersController::class, 'getAll'])->name('customers.getAll');
        Route::resource('/services', \App\Http\Controllers\Worker\ServicesController::class)->names([
            'index' => 'services.index',
            'create' => 'services.create',
            'store' => 'services.store',
            'show' => 'services.show',
            'edit' => 'services.edit',
            'update' => 'services.update',
            'destroy' => 'services.destroy',
        ]);
        Route::post("/services/{id}/start-warranty", [\App\Http\Controllers\Worker\ServicesController::class, 'startWarranty'])->name('services.startWarranty');
        Route::resource('/products', \App\Http\Controllers\Worker\ProductsController::class)->names([
            'index' => 'products.index',
            'create' => 'products.create',
            'store' => 'products.store',
            'show' => 'products.show',
            'edit' => 'products.edit',
            'update' => 'products.update',
            'destroy' => 'products.destroy',
        ]);
        Route::post('/products/check-product', [\App\Http\Controllers\Worker\ProductsController::class, 'checkProduct'])->name('products.checkProduct');
    });

});
/*
 *  OUTWARD ROUTES
 */
Route::get('manifest.json', function () {
    $json = '{
                "name": "OLEX Films®",
                "short_name": "OLEX® Films",
                "theme_color": "#003f26",
                "background_color": "#003f26",
                "display": "fullscreen",
                "orientation": "portrait",
                "scope": "/",
                "start_url": "{start_url}",
                "icons": [
                    {
                        "src": "/icons/logo-48x48.png",
                        "sizes": "48x48",
                        "type": "image/png"
                    },
                    {
                        "src": "/icons/logo-72x72.png",
                        "sizes": "72x72",
                        "type": "image/png"
                    },
                    {
                        "src": "/icons/logo-128x128.png",
                        "sizes": "128x128",
                        "type": "image/png"
                    },
                    {
                        "src": "/icons/logo-144x144.png",
                        "sizes": "144x144",
                        "type": "image/png"
                    },
                    {
                        "src": "/icons/logo-192x192.png",
                        "sizes": "192x192",
                        "type": "image/png"
                    },
                    {
                        "src": "/icons/logo-512x512.png",
                        "sizes": "512x512",
                        "type": "image/png"
                    },
                    {
                        "src": "/icons/logo-1024x1024.png",
                        "sizes": "1024x1024",
                        "type": "image/png"
                    }

                ]
            }';
    if (request()->session()->has('manifest')) {
        $customerId = request()->session()->get('manifest');
        $print = str_replace("{start_url}", '/customer/' . Crypt::encrypt($customerId), $json);
        //request()->session()->forget('manifest');
        return response($print)->header('Content-Type', 'application/json');
    } else {
        $print = str_replace("{start_url}", '/', $json);
        request()->session()->forget('manifest');
        return response($print)->header('Content-Type', 'application/json');
    }
});
Route::get('/service-details/{id}', [\App\Http\Controllers\Worker\ServicesController::class, 'pdfSourceDataService'])->name('worker.pdfSourceDataService');
Route::get('/pdf', [\App\Http\Controllers\HomeController::class, 'pdfSourceDataService']);
Route::get('/log-test', function () {
    Log::channel('sms')->info([
        "message" => "LOG TEST",
    ]);
    return response()->json(['message' => 'LOG TEST22']);
});
Route::get('/warranty/{id}', [\App\Http\Controllers\WarrantyController::class, 'index'])->name('warranty.index');
Route::get('/warranty/{id}/pdf', [\App\Http\Controllers\WarrantyController::class, 'pdf'])->name('warranty.pdf');
Route::get('/customer/{hash}', [\App\Http\Controllers\CustomerController::class, 'index'])->name('customer.notify');
Route::post('/customer/{hash}/store', [\App\Http\Controllers\CustomerController::class, 'update'])->name('customer.notifyUpdate');

require __DIR__ . '/auth.php';
