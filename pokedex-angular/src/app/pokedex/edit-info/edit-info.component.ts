import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../types/Pokemon';
import { AccountsService } from '../accounts.service';
import { NgForm } from '@angular/forms';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.scss'],
  providers: [AccountsService]
})

export class EditInfoComponent implements OnInit, CanComponentDeactivate {
  pokemon: Pokemon;
  changesSaved: boolean = false;

  constructor(private accountsService: AccountsService, private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.pokemon = this.accountsService.getById(Number(id));
  }

  @Output() catchPoke = new EventEmitter<Pokemon>();

  formatCatchDate(date) {
    if (date) {
      const catchData = new Date(date);
      let day = "0" + catchData.getDate();
      let month = "0" + (catchData.getMonth() + 1);
      let year = catchData.getFullYear();

      return `${day.substr(-2)}.${month.substr(-2)}.${year}`;
    }
  }

  onSubmit(form: NgForm) {
    this.pokemon.name = form.value.name;
    this.pokemon.damage = form.value.damage;
    this.pokemon.isCaught = form.value.isCaught;
    this.pokemon.catchDate = form.value.catchDate;

    this.accountsService.update(this.pokemon);

    this.router.navigate(['/pokemon-profile', this.pokemon.id]);

    this.changesSaved = true;
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    return confirm('Do you want to save changes?');
  }
}
