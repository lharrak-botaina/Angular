import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  users :any;
constructor(private userServices :UsersService){}
ngOnInit(): void {

 this.users = this.userServices.getUsers().subscribe((data)=>{
  this.users=data
 })

}
}
