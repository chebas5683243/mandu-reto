<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\DivisionController;

Route::group([
    'prefix' => 'division'
], function($route) {
    Route::get('/', [DivisionController::class, 'list']);
    Route::get('/{division_id}', [DivisionController::class, 'show']);
    Route::post('/', [DivisionController::class, 'store']);
    Route::put('/{division_id}', [DivisionController::class, 'update']);
    Route::delete('/{division_id}', [DivisionController::class, 'destroy']);
    Route::get('/{division_id}/subdivisions', [DivisionController::class, 'listSubdivisions']);
});
