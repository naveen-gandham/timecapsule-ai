import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Capsule } from '../models/capsule.model';

@Injectable({
  providedIn:'root'
})
export class CapsuleService {

  private capsules: Capsule[] = [];
  private subject = new BehaviorSubject<Capsule[]>([]);

  capsules$ = this.subject.asObservable();

  constructor(){
    this.loadFromStorage();
  }

  // =========================
  // STORAGE SAFE LOAD (SSR FIX)
  // =========================
  private loadFromStorage(){

    if(typeof window === 'undefined') return;

    const data = localStorage.getItem('capsules');

    if(data){
      this.capsules = JSON.parse(data);
      this.subject.next(this.capsules);
    }
  }

   save(){
    if(typeof window === 'undefined') return;

    localStorage.setItem(
      'capsules',
      JSON.stringify(this.capsules)
    );
  }

  // =========================
  // CRUD
  // =========================
  add(c:Capsule){
    this.capsules.push(c);
    this.subject.next([...this.capsules]);
    this.save();
  }

  delete(id:number){
    this.capsules =
      this.capsules.filter(c=>c.id!==id);

    this.subject.next([...this.capsules]);
    this.save();
  }

  // ✅ ONLY ONE getAll()
  getAll():Capsule[]{
    return [...this.capsules];
  }

}