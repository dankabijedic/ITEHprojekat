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
            'post_id' => $this->resource->post_id,
            'sadrzaj' => $this->resource->sadrzaj,
            'datoteka' => $this->resource->datoteka,
            'user_id' => $this->resource->user
        ];
    }
}
