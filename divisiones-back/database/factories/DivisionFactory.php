<?php

namespace Database\Factories;

use App\Models\Division;
use Illuminate\Database\Eloquent\Factories\Factory;

class DivisionFactory extends Factory
{
    protected $model = Division::class;

    public function definition()
    {
        return [
            'name' => $this->faker->unique()->company(),
            'level' => $this->faker->numberBetween(1, 10),
            'collaborators' => $this->faker->numberBetween(1, 20)
        ];
    }
}
