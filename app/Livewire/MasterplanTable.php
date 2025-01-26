<?php

namespace App\Livewire;

use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\Lotification;
use App\Providers\PermissionKey;
use Livewire\Attributes\On;
use Rappasoft\LaravelLivewireTables\Views\Columns\ComponentColumn;

class MasterplanTable extends DataTableComponent
{
	protected $model = Lotification::class;

	public $columnSearch = [
		'lote' => null,
		'etapa' => null,
	];

	public function configure(): void
	{
		$this->setPrimaryKey('id')
			->setAdditionalSelects([
				'lotifications.status',
				'lotifications.precio_total'
			]);
		$this->setPerPageAccepted([25, 50, 100]);
		$this->setPerPage(25);
		$this->setSearchDebounce(1000);
	}

	#[On('change-status')]
	public function changestatus($status, $id)
	{
		$up = Lotification::find($id);
		$up->status = $status;
		$up->save();

		flash()->addSuccess('Se actualizo el estado');
	}

	public function columns(): array
	{

		$columns = [
			Column::make("ID", "id")
				->sortable(),
			Column::make("Lote", "lote")
				->searchable()
				->sortable(),
			Column::make("Precio total", "precio_total")->label(function ($row) {
				return '$' . number_format($row->precio_total, 2);
			}),
			Column::make('Estado')
				->label(function ($row) {
					return view('components.masterplan.status')->with('data', $row);
				}),

			// Column::make('')
			// 	->label(fn ($row) => view('livewire.update-masterplan-status', ["id" => $row->id, "status" => $row->status]))->html(),

			Column::make('Acciones')
				->label(
					function ($row) {
						$edit = '<button type="button" class="font-medium text-emerald-600 dark:text-emerald-500 mr-2" wire:click="$dispatch(\'open-modal\', {data: ' . $row . '})">
							<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
								<path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
								<path d="M16 5l3 3"></path>
							</svg>
							</button>';
						return $edit;
					}
				)->html(),
		];

		if (auth()->user()->hasPermissionTo(PermissionKey::Masterplan['permissions']['status']['name'])) {
			array_push(
				$columns,
				Column::make('')
					->label(fn($row) => view('livewire.update-masterplan-status', ["id" => $row->id, "status" => $row->status]))->html()
			);
		}

		// if (auth()->user()->hasPermissionTo(PermissionKey::Masterplan['permissions']['update']['name'])) {
		// 	array_push(
		// 		$columns,
		// 		Column::make('Acciones')
		// 			->label(
		// 				function ($row) {
		// 					$edit = '<button type="button" class="font-medium text-emerald-600 dark:text-emerald-500 mr-2" wire:click="$dispatch(\'open-modal\', {data: ' . $row . '})">
		// 					<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
		// 						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
		// 						<path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
		// 						<path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
		// 						<path d="M16 5l3 3"></path>
		// 					</svg>
		// 					</button>';
		// 					return $edit;
		// 				}
		// 			)->html()
		// 	);
		// }

		return $columns;
	}
}
