<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Division extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'division';

    protected $fillable = [
        'name',
        'level',
        'collaborators',
        'upper_division_id',
        'ambassador_id'
    ];

    public function upperDivision() {
        return $this->belongsTo('App\Models\Division','upper_division_id');
    }

    public function subdivisions() {
        return $this->hasMany('App\Models\Division','upper_division_id');
    }

    public function ambassador() {
        return $this->belongsTo('App\Models\User','ambassador_id');
    }
}
