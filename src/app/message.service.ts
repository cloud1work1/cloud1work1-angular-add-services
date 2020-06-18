import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

@Injectable()
export class MessageService {
  messages: string[] = [];
  constructor() { }

  addMessage(message: string){
    this.messages.push(message);
  }

getAllMessages(): Observable<string[]> {
  return of(this.messages);
}
 clearMessages() {
   this.messages=[];
 }
}