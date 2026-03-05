import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { CapsuleService } from '../../../services/capsule';
import { Capsule } from '../../../models/capsule.model';
import { CapsuleCard } from '../capsule-card/capsule-card';
import { CapsuleForm } from '../capsule-form/capsule-form';

@Component({
 selector:'app-capsules',
 standalone:true,
 imports:[CommonModule, CapsuleCard, CapsuleForm],
 templateUrl:'./capsules.html'
})
export class Capsules implements OnInit {

 capsules$!: Observable<Capsule[]>;

 constructor(private service: CapsuleService){}

 ngOnInit(): void {
   this.capsules$ = this.service.capsules$;
 }

 remove(id:number){
   this.service.delete(id);
 }
}