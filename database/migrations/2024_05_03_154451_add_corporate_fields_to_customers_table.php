<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('customers', function (Blueprint $table) {
            $table->enum('type', ['individual', 'company'])->default('individual')->after('id');
            $table->string('vat_name')->nullable()->after('address');
            $table->string('vat_number')->nullable()->after('vat_name');
            $table->string('vat_office')->nullable()->after('vat_number');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('customers', function (Blueprint $table) {
            $table->dropColumn('type');
            $table->dropColumn('vat_name');
            $table->dropColumn('vat_number');
            $table->dropColumn('vat_office');
        });
    }
}; 