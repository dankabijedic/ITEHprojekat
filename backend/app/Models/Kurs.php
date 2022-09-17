<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kurs extends Model
{
    use HasFactory;

    protected $fillable = [
        'naziv',
        'broj_casova',
        'cena',
        'opis',
        'predmet_id'
    ];

    public function predmet()
    {
        return $this->belongsTo(Predmet::class);
    }
}
