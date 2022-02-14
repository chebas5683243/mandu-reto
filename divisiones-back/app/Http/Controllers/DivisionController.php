<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Models\Division;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\Utils\ApiUtils;

class DivisionController extends Controller
{
    public function list(Request $request){
        try {
            if(!$request->size) $request->size=10;

            $divisions_names = Division::all('name');
            $upper_divisions_names = Division::whereHas('subdivisions')->orderBy('name')->get(['name']);
            $levels = Division::groupBy('level')->orderBy('level')->get(['level']);

            $divisions = Division::select([
                'division.id',
                'division.name',
                'division.level',
                'division.collaborators',
                DB::raw('count(subdivision.id) as n_subdivisions'),
                'up_div.name as upper_division_name',
                'user.name as ambassador_name'
            ])->join('division as up_div','division.upper_division_id', '=', 'up_div.id', 'left outer')
                ->join('user','division.ambassador_id', '=', 'user.id', 'left outer')
                ->join('division as subdivision','subdivision.upper_division_id', '=', 'division.id', 'left outer')
                ->groupBy('division.id');

            if($request->filters) {
                if($request->filters["level"]){
                    $divisions = $divisions->whereIn('division.level', $request->filters["level"]);
                }
                if($request->filters["name"]){
                    $divisions = $divisions->whereIn('division.name', $request->filters["name"]);
                }
                if($request->filters["upper_division_name"]){
                    $divisions = $divisions->whereIn('up_div.name', $request->filters["upper_division_name"]);
                }
            }

            if($request->sorter) {
                foreach($request->sorter as $sort_field) {
                    $divisions = $divisions->orderBy($sort_field["name"], $sort_field["order"]);
                } 
            }

            $divisions = $divisions->paginate($request->size);
        }
        catch (Exception $ex) {
            return ApiUtils::respuesta(false);
        }

        return ApiUtils::respuesta(true, [
            'divisions' => $divisions,
            'divisions_names' => $divisions_names,
            'upper_divisions_names' => $upper_divisions_names,
            'levels' => $levels
        ]);
    }

    public function show($division_id) {
        try {
            $division = Division::with(['ambassador:id,name','upperDivision:id,name'])->where('id',$division_id)->first();

            unset($division->created_at, $division->updated_at, $division->deleted_at);
            unset($division->upper_division_id, $division->ambassador_id);
        }
        catch (Exception $ex) {
            return ApiUtils::respuesta(false);
        }

        return ApiUtils::respuesta(true, [
            'division' => $division,
        ]);
    }

    public function store(Request $request) {
        $rules = [
            'name' => ['required', 'string', 'unique:division', 'max:45'],
            'level' => ['required', 'int', 'min:1'],
            'collaborators' => ['required', 'int', 'min:1'],
            'upper_division_id' => ['int','exists:division,id'],
            'ambassador_id' => ['int', 'exists:user,id']
        ];

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return ApiUtils::respuesta(false, ['division' => $validator->errors()]);
        }

        try {
            $division = Division::create($request->all());
        }
        catch (Exception $ex) {
            return ApiUtils::respuesta(false);
        }

        return ApiUtils::respuesta(true, [
            'division' => $division,
        ]);
    }

    public function update(Request $request, $division_id) {
        $rules = [
            'name' => ['string', 'unique:division,name,'.$division_id, 'max:45'],
            'level' => ['int', 'min:1'],
            'collaborators' => ['int', 'min:1'],
            'upper_division_id' => ['int','exists:division,id'],
            'ambassador_id' => ['int', 'exists:user,id']
        ];

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return ApiUtils::respuesta(false, ['division' => $validator->errors()]);
        }

        try {
            $division = Division::find($division_id);

            $division->fill($request->all());

            $division->save();
        }
        catch (Exception $ex) {
            return ApiUtils::respuesta(false);
        }

        return ApiUtils::respuesta(true, [
            'division' => $division,
        ]);
    }

    public function destroy($division_id) {
        try {
            $division = Division::find($division_id);

            $division->delete();
        }
        catch (Exception $ex) {
            return ApiUtils::respuesta(false);
        }

        return ApiUtils::respuesta(true);
    }

    public function listSubdivisions($division_id) {
        try {
            $division = Division::with(['subdivisions'])->where('id',$division_id)->first();
            $subdivisions = $division->subdivisions;

            foreach($subdivisions as $subdivision) {
                unset($subdivision->created_at, $subdivision->updated_at, $subdivision->deleted_at);
                unset($subdivision->upper_division_id, $subdivision->ambassador_id);
            }
        }
        catch (Exception $ex) {
            return ApiUtils::respuesta(false);
        }

        return ApiUtils::respuesta(true, [
            'subdivisions' => $subdivisions,
        ]);
    }
}
