import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
   clientList =[
    {clientId:1,name:"botaina",age:24},
    {clientId:2,name:"OUM",age:27},
    {clientId:3,name:"ADNANE",age:22},
    {clientId:4,name:"OMAR",age:30},
    {clientId:5,name:"YASSMINE",age:23},
    {clientId:6,name:"NADA",age:22},
  ]

}
