<?php

namespace App\Livewire;

use App\Models\Lotification;
use Livewire\Attributes\On;
use Livewire\Component;

class ModalMasterplan extends Component
{

	public $data = null;
	public bool $open = false;

	public $precioTotal = 0;
	public $status = '';


	#[On('open-modal')]
	public function open($data)
	{
		$this->data = $data;

		$this->precioTotal = $data['precio_total'];
		$this->status = $data['status'];

		$this->open = true;
	}

	#[On('save-modal')]
	public function save()
	{
		$upd = Lotification::find($this->data['id']);
		$upd->precio_total = $this->precioTotal;
		$upd->status = $this->status;
		$upd->save();

		flash()->addSuccess('Datos actualizados');

		$this->reset();
		$this->dispatch('refreshDatatable');
	}

	#[On('close-modal')]
	public function close()
	{
		$this->reset();
	}

	public function render()
	{
		return view('livewire.modal-masterplan');
	}
}
