import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heros: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    this.heroService.getAllHeros().subscribe(heros => this.heros=heros);
  }

  onSelect(hero:Hero) {
    this.selectedHero = hero;
    this.messageService.addMessage("Selected Hero: " + this.selectedHero.name);
  }

 

}