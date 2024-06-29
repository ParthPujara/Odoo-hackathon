<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Furniture extends Model
{
    use HasFactory;
    protected $table="furnitures";

    public function images(): HasMany{
        return $this->hasMany(FurnitureImage::class);
    }
    public function city(): BelongsTo{
        return $this->belongsTo(City::class);
    }
}
