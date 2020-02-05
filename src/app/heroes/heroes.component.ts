import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // hero = "Windstorm";
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  // heroes = HEROES;
  heroes: Hero[]; // Service
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes(); // getHeroes() 'HeroService class'; heroService is a parameter of contrustor
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
