<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

    public static $wrap = 'post';

    public function toArray($request)
    {
        return [
            'naslov' => $this->resource->naslov,
            'sadrzaj' => $this->resource->sadrzaj,
        ];
    }
}
