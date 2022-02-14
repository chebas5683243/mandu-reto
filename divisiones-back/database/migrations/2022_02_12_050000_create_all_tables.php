<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAllTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        print("Migración de todas las tablas: Iniciando\n");
        Schema::disableForeignKeyConstraints();

        // tables
        Schema::create('division', function(Blueprint $table) {
            $table->id();
            $table->string('name',45)->unique();
            $table->unsignedInteger('level');
            $table->unsignedInteger('collaborators');
            $table->timestamps();
            $table->softDeletes();
        });
        Schema::create('user', function(Blueprint $table) {
            $table->id();
            $table->string('name',100)->unique();
            $table->timestamps();
            $table->softDeletes();
        });

        //foreign keys
        Schema::table('division', function(Blueprint $table){
            $table->foreignId('upper_division_id')->nullable()->constrained('division');
            $table->foreignId('ambassador_id')->nullable()->constrained('user');
        });

        Schema::enableForeignKeyConstraints();
        print("Finalizado!\n");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('all_tables');
    }
}
