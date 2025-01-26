<?php

namespace App\Livewire;

use App\Models\Lotification;
use Livewire\Component;

class MasterplanComponent extends Component
{
	public $data = [];

	public function mount()
	{
		$this->data = Lotification::all();
	}

	public function render()
	{
		return view('livewire.masterplan-component');
	}
}
