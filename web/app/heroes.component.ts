import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router-deprecated";

import { Hero } from "./hero";
import { HeroService } from "./hero.service";

@Component({
  selector: "heroes",
  templateUrl: "app/heroes.component.html",
  styleUrls: ["app/heroes.component.css"],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router) {
  };

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  };

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  };

  gotoDetail() {
    this.router.navigate(["HeroDetail", { id: this.selectedHero.id }]);
  }
}
