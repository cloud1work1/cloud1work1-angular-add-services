import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROS } from './mock-heros';
import { Hero } from './hero';
import { MessageService} from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getAllHeros(): Observable<Hero[]> {
    this.messageService.addMessage("fetching list of heros");
    return of(HEROS);
  }

}