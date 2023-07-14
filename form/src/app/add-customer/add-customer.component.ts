import { Component } from '@angular/core';
import {NgForm  } from "@angular/forms";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent  {
  firstName?:string
  check:boolean=false;
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

}
  addCustomer(formValue:NgForm){
      console.log(formValue.value)
}
reset(formValue:NgForm){
  formValue.reset()
}
setForm(formValue:NgForm){
  let userDetails={
    firstName:'botaina',
    check:true
  }
  formValue.setValue(userDetails)
}

}
