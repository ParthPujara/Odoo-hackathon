<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('order_id');
            $table->timestamp('order_created_at');
            $table->double('rent');
            $table->date('start_date');
            $table->date('end_date');
            $table->boolean('is_authorized')->default(false);
            $table->string('payment_id')->nullable(true);
            $table->unsignedBigInteger('furniture_id')->nullable();
            $table->foreign('furniture_id')->references('id')->on('furnitures');
            $table->foreignId('user_id')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
};
