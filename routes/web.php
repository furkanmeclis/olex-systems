<?php

use App\Http\Controllers\ProfileController;
use App\Models\ProductCode;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CarDataImportController;
use App\Http\Controllers\ExportController;

Route::get('/setup', function () {
    try {
        Artisan::call('migrate');
        return response()->json([
            'message' => 'Setup completed successfully',
            'details' => Artisan::output()
        ]);
    } catch (\Exception $e) {
        return response()->json([
            'error' => 'Setup failed',
            'message' => $e->getMessage()
        ], 500);
    }
});

Route::get('/match-logos', function () {
    try {
        $result = \App\Models\Services::matchLogos();
        return response()->json($result);
    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => 'Logo eşleştirme işlemi sırasında hata oluştu',
            'error' => $e->getMessage()
        ], 500);
    }
});

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name("home");
Route::get('/dashboard', [\App\Http\Controllers\HomeController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/redirect/{id}', function ($mail) {
    return redirect()->route('home');
});
Route::get('/migrate', function () {
    Artisan::call("migrate");
    return response()->json("Migrated");
});
Route::get('/clean', function () {
    Artisan::call("cache:clear");
    Artisan::call("config:clear");
    return response()->json("Cleared");
});
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::prefix('/super')->name('super.')->group(function () {
        /*
         * CAR MANAGEMENT ROUTES
         */
        Route::prefix('/car')->name('car.')->group(function () {
            // Brand Routes
            Route::prefix('/brands')->name('brands.')->group(function () {
                Route::get('/', [CarDataImportController::class, 'brands'])->name('index');
                Route::post('/', [CarDataImportController::class, 'storeBrand'])->name('store');
                Route::put('/{brand}', [CarDataImportController::class, 'updateBrand'])->name('update');
                Route::delete('/{brand}', [CarDataImportController::class, 'destroyBrand'])->name('destroy');
                Route::post('/get-brands', [CarDataImportController::class, 'getBrands'])->name('get');
                Route::post('/bulk-status', [CarDataImportController::class, 'bulkStatusBrands'])->name('bulk-status');

                // Model Routes (Nested under brands)
                Route::prefix('/{brand}/models')->name('models.')->group(function () {
                    Route::get('/', [CarDataImportController::class, 'models'])->name('index');
                    Route::post('/', [CarDataImportController::class, 'storeModel'])->name('store');
                    Route::put('/{model}', [CarDataImportController::class, 'updateModel'])->name('update');
                    Route::delete('/{model}', [CarDataImportController::class, 'destroyModel'])->name('destroy');
                    Route::post('/get-models', [CarDataImportController::class, 'getModels'])->name('get');
                    Route::post('/bulk-status', [CarDataImportController::class, 'bulkStatusModels'])->name('bulk-status');
                });
            });

            // Data Import Routes
            Route::prefix('/data')->name('data.')->group(function () {
                Route::post('/import', [CarDataImportController::class, 'import'])->name('import');
                Route::post('/reset', [CarDataImportController::class, 'reset'])->name('reset');
                Route::get('/status', [CarDataImportController::class, 'importStatus'])->name('status');
            });
        });

        Route::prefix("/notify-sms")->name('notifySms.')->group(function () {
            Route::get('/', [\App\Http\Controllers\Super\NotifySmsController::class, 'index'])->name('index');
            Route::post('/send-sms', [\App\Http\Controllers\Super\NotifySmsController::class, 'sendSMS'])->name('sendSMS');
            Route::post("/send-notification", [\App\Http\Controllers\Super\NotifySmsController::class, 'sendNotification'])->name('sendNotification');
        });
        /*
         * SUPER ROLES ROUTES
         */
        Route::post('/statics-data', [\App\Http\Controllers\Super\HomeController::class, 'staticsData'])->name('staticsData');
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
        Route::put('/orders/{id}/update-tracking-code', [\App\Http\Controllers\Super\OrdersController::class, 'updateTrackingCode'])->name('orders.updateTrackingCode');
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

        Route::get('/services', [\App\Http\Controllers\Super\HomeController::class, 'services'])->name('services');
    });
    /*
     * ----------------------------------------------
     *                 CENTRAL ROLE
     * ----------------------------------------------
     */
    Route::prefix('/central')->name("central.")->group(function () {

        Route::get('/services', [\App\Http\Controllers\Super\HomeController::class, 'services'])->name('services');
        Route::post('/statics-data', [\App\Http\Controllers\Central\HomeController::class, 'staticsDataCentral'])->name('staticsDataCentral');
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
        Route::put('/orders/{id}/tracking-code', [\App\Http\Controllers\Central\OrdersController::class, 'updateTrackingCode'])->name('orders.updateTrackingCode');
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
        Route::post('/statics-data', [\App\Http\Controllers\Dealer\DealerHomeController::class, 'staticsData'])->name('staticsData');
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
        Route::post('/services/get-digital-service', [\App\Http\Controllers\Worker\ServicesController::class, 'getDigitalService'])->name('services.getDigitalService');
        Route::post("/services/{id}/start-warranty", [\App\Http\Controllers\Worker\ServicesController::class, 'startWarranty'])->name('services.startWarranty');
        Route::post('/products/check-product', [\App\Http\Controllers\Worker\ProductsController::class, 'checkProduct'])->name('products.checkProduct');
    });

});
/*
 *  OUTWARD ROUTES
 */
Route::inertia('/new-ui', 'Warranty/NewUi')->name('new-ui');
Route::get('/service-details/{id}', [\App\Http\Controllers\Worker\ServicesController::class, 'pdfSourceDataService'])->name('worker.pdfSourceDataService');
Route::get('/pdf', [\App\Http\Controllers\HomeController::class, 'pdfSourceDataService']);
Route::get('/warranty/{id}', [\App\Http\Controllers\WarrantyController::class, 'index'])->name('warranty.index');
Route::get('/warranty/{id}/pdf', [\App\Http\Controllers\WarrantyController::class, 'pdf'])->name('warranty.pdf');
Route::get('/customer/{hash}', [\App\Http\Controllers\CustomerController::class, 'index'])->name('customer.notify');
Route::post('/customer/{hash}/store', [\App\Http\Controllers\CustomerController::class, 'update'])->name('customer.notifyUpdate');

// Excel export route
Route::get('/export-services', [ExportController::class, 'exportServices'])->name('export.services');

require __DIR__ . '/auth.php';
