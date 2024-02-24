<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Match
 *
 * @property $id
 * @property $location
 * @property $date
 * @property $activity
 * @property $num_referee
 * @property $details
 * @property $created_at
 * @property $updated_at
 *
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class Match extends Model
{
    
    static $rules = [
		'location' => 'required',
		'date' => 'required',
		'activity' => 'required',
		'num_referee' => 'required',
		'details' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['location','date','activity','num_referee','details'];



}
