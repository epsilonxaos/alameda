<?php

namespace App\Http\Controllers;

use App\DataTables\LotificationDataTable;
use App\Models\Lotification;
use Illuminate\Http\Request;

class LotificationController extends Controller
{
	public function masterplan()
	{

		return view('panel.masterplan.masterplan', [
			"title" => "Masterplan",
			"breadcrumb" => [
				[
					'title' => 'Masterplan',
					'active' => true
				]
			]
		]);
	}

	/**
	 * Display a listing of the resource.
	 */
	public function index(LotificationDataTable $dataTable)
	{
		$data = Lotification::all();
		return $dataTable->render('panel.lotificacion.index', [
			"title" => "Lotificacion",
			"breadcrumb" => [
				[
					'title' => 'Lotificacion',
					'active' => true
				]
			],
			"data" => $data
		]);
	}

	/**
	 * Show the form for creating a new resource.
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request)
	{
		//
	}

	/**
	 * Display the specified resource.
	 */
	public function show(Lotification $lotification)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(Lotification $lotification)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, Lotification $lotification)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(Lotification $lotification)
	{
		//
	}
}
