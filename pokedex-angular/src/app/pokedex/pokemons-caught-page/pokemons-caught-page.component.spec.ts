import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsCaughtPageComponent } from './pokemons-caught-page.component';

describe('PokemonsCaughtPageComponent', () => {
  let component: PokemonsCaughtPageComponent;
  let fixture: ComponentFixture<PokemonsCaughtPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonsCaughtPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsCaughtPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
