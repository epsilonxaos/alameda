<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lotification extends Model
{
	use HasFactory;

	protected $table = 'lotifications';
	protected $primaryKey = 'id';
	protected $fillable = [
		'lote',
		'precio_total',
		'status',
	];
}
