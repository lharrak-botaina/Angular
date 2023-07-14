import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent  {

  addContactForm!:FormGroup
  firstName?="";
  lastName?:string;


  constructor(private formB:FormBuilder, private routeParams : ActivatedRoute){}

  ngOnInit(): void {
    this.routeParams.params.subscribe(val=>{
      console.log(val['id'])
    })
    this.addContactForm= this.formB.group({
      'firstName':new FormControl('',Validators.required),
      'lastName':new FormControl()

    })
    this.addContactForm.statusChanges.subscribe(data=>{
      console.log(data)
    })

  }
  trackName() {
   this.addContactForm.valueChanges.subscribe(data=>{
    console.log(data)
    })

  }
  add(){
    // console.log(this.addContactForm.value)
    console.log(this.addContactForm.get('firstName')?.value)

  }


}
