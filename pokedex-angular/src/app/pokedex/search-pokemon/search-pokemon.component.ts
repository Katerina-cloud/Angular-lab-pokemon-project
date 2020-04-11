import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss'],
})
export class SearchPokemonComponent implements OnInit {
  name: string;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() filterPoke = new EventEmitter<string>();

  onSubmit(form: NgForm) {
    this.filterPoke.emit(form.value.name);
  }

}
