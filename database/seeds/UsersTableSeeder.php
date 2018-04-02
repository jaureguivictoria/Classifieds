<?php

use Illuminate\Database\Seeder;

use Classifieds\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::updateOrCreate(
            array(
                'id' => 1,
            ),
            array(
                'name' => 'Admin',
                'surname' => 'Account',
                'email' => 'jaureguivictoria@gmail.com',
                'password' => Hash::make(env('ADMIN_USER_PASSWORD')),
            )
        );

    }
}
