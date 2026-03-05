import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CapsuleService } from '../../../services/capsule';
import { Capsule } from '../../../models/capsule.model';

@Component({
 selector:'app-capsule-form',
 standalone:true,
 imports:[CommonModule,ReactiveFormsModule],
 templateUrl:'./capsule-form.html'
})
export class CapsuleForm implements OnInit{

 form!:FormGroup;

 constructor(
   private fb:FormBuilder,
   private service:CapsuleService){}

 ngOnInit(){
   this.form=this.fb.group({
     title:[''],
     message:[''],
     unlockDate:[''],
     mood:['happy']
   });
 }

 save(){

   const v=this.form.value;

   if(!v.title || !v.unlockDate) return;

   const capsule:Capsule={
     id:Date.now(),
     opened:false,
     title:v.title,
     message:v.message ?? '',
     unlockDate:new Date(v.unlockDate),
     mood:v.mood
   };

   this.service.add(capsule);
   this.form.reset({mood:'happy'});
 }
}