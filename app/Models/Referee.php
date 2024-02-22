<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Referee
 *
 * @property $id
 * @property $name
 * @property $lastname
 * @property $document
 * @property $phone
 * @property $created_at
 * @property $updated_at
 *
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class Referee extends Model
{
    
    static $rules = [
		'name' => 'required',
		'lastname' => 'required',
		'document' => 'required',
		'phone' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['name','lastname','document','phone'];



}
