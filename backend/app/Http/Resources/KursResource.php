<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class KursResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

    public static $wrap = 'kurs';

    public function toArray($request)
    {
        return [
            'naziv' => $this->resource->naziv,
            'broj_casova' => $this->resource->broj_casova,
            'cena' => $this->resource->cena,
            'opis' => $this->resource->opis,
            'predmet_id' => $this->resource->predmet_id,
        ];
    }
}
