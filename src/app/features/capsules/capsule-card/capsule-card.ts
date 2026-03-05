import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, map } from 'rxjs';

import { Capsule } from '../../../models/capsule.model';
import { GlowDirective } from '../../../shared/glow';

@Component({
 selector:'app-capsule-card',
 standalone:true,
 imports:[CommonModule,GlowDirective],
 templateUrl:'./capsule-card.html'
})
export class CapsuleCard{

 @Input({required:true}) capsule!:Capsule;
 @Output() remove=new EventEmitter<number>();

 countdown$ =
   interval(1000).pipe(
     map(()=>this.getRemaining())
   );

 delete(){
   this.remove.emit(this.capsule.id);
 }

 getRemaining(){
   const diff =
     new Date(this.capsule.unlockDate).getTime()
     - new Date().getTime();

   if(diff<=0) return 'Unlocked';

   const sec=Math.floor(diff/1000)%60;
   const min=Math.floor(diff/60000)%60;
   const hr=Math.floor(diff/3600000)%24;
   const day=Math.floor(diff/86400000);

   return `${day}d ${hr}h ${min}m ${sec}s`;
 }

 moodClass(){
   return 'mood-'+this.capsule.mood;
 }
}