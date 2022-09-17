<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use PDO;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'predmet_id',
        'sadrzaj',
        'datoteka',
        'user_id',
    ];

    public function predmet()
    {
        return $this->belongsTo(Predmet::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
