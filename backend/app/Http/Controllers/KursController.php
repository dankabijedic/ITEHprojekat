<?php

namespace App\Http\Controllers;

use App\Http\Resources\KursResource;
use App\Models\Kurs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class KursController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $kursevi = Kurs::all();
        return $kursevi;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'naziv' => 'required',
            'broj_casova' => 'required',
            'cena' => 'required',
            'opis',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $kurs = Kurs::create([
            'naziv' => $request->naziv,
            'broj_casova' => $request->broj_casova,
            'cena' => $request->cena,
            'opis' => $request->opis,
        ]);

        return response()->json(['Kurs created successfully.', new KursResource($kurs)]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Kurs  $kurs
     * @return \Illuminate\Http\Response
     */
    public function show(Kurs $kurs)
    {
        return new KursResource($kurs);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Kurs  $kurs
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $course = Kurs::find($id);
        if ($course) {
            return response()->json([
                'course' => $course,
            ]);
        } else {
            return response()->json([
                'message' => 'Nije pronadjen kurs.',
            ]);
        }
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Kurs  $kurs
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'naziv' => 'required',
            'broj_casova' => 'required',
            'cena' => 'required',
            'opis',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->messages(),
            ]);
        } else {
            $course = Kurs::find($id);
            if ($course) {
                $course->naziv = $request->input('naziv');
                $course->broj_casova = $request->input('broj_casova');
                $course->cena = $request->input('cena');
                $course->opis = $request->input('opis');
                $course->update();

                return response()->json([
                    'message' => 'Kurs je uspesno izmenjen.',
                ]);
            } else {
                return response()->json([
                    'message' => 'Kurs nije pronadjen.',
                ]);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Kurs  $kurs
     * @return \Illuminate\Http\Response
     */
    public function destroy($course_id)
    {
        $kurs = Kurs::find($course_id);
        $success = $kurs->delete();
        return [
            'success' => $success,
        ];
    }

    public function getKurs($course_id)
    {
        $course = Kurs::find($course_id);
        return $course;
    }
}
