import { Component } from '@angular/core';
import {UsersService}from '../services/users.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  users = [{'name':'h'}];
  constructor(private usersServices:UsersService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const data =this.usersServices.getUsers()
    // this.users = data
  }


}
