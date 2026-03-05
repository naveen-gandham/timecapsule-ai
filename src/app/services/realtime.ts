import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn:'root' })
export class RealtimeService {

  private moodSource =
    new BehaviorSubject<string>('neutral');

  mood$ = this.moodSource.asObservable();

  updateMood(mood:string){
    this.moodSource.next(mood);
  }
}