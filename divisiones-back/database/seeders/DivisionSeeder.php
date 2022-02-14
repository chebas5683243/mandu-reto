<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Division;

class DivisionSeeder extends Seeder
{
    public function run()
    {
        $division_registers = config('seeders.division_registers');

        $divisions = Division::factory()->count($division_registers)->create();

        $division_ids = range(1, $division_registers);
        shuffle($division_ids);

        $upper_division_ids = [];
        $subdivision_ids = [];

        foreach(range(1,5) as $_) {
            $upper_division_ids[] = array_pop($division_ids);
        }

        $end_loop = false;
        while (count($division_ids)) {
            foreach($upper_division_ids as $upper_division_id) {
                for($i = 0; $i < rand(0,3); $i++) {
                    $subdivision_id = array_pop($division_ids);
                    if($subdivision_id === null) {
                        $end_loop = true;
                        break;
                    }
                    $divisions[$subdivision_id-1]->upper_division_id = $upper_division_id;
                    $subdivision_ids[] = $subdivision_id;
                }
                if($end_loop) break;
            }
            
            if(count($subdivision_ids) === 0) break;
            
            $upper_division_ids = $subdivision_ids;
            $subdivision_ids = [];
        }

        $users_ids = range(1, config('seeders.user_registers'));
        shuffle($users_ids);

        foreach($divisions as $division) {
            $hasAmbassador = rand(0,1);
            if($hasAmbassador) {
                $division->ambassador_id = array_pop($users_ids);
            }
            $division->save();
        }
    }
}
