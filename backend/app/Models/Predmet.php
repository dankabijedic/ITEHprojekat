<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Predmet extends Model
{
    use HasFactory;

    protected $fillable = [
        'naziv',
        'godina',
    ];

    public function kurs()
    {
        return $this->hasMany(Kurs::class);
    }

    public function predmet()
    {
        return $this->hasMany(Predmet::class);
    }
}
