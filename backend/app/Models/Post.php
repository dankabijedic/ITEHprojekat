<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use PDO;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'naslov',
        'sadrzaj',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
