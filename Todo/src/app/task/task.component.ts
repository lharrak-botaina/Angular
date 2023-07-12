import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent  {
  name= "";
  id=0;
  data=[
    {"id":1,"name":"maquette"},
    {"id":2,"name":"conception"}
  ]
  ajouter(){
    console.log(this.name)
    this.data.push({"id":this.data.length+1,"name":this.name})
  }
  supprimer(id:number){
    console.log(id)
    var index = this.data.findIndex(value => value.id ===id)
    this.data.splice(index,1)
  }
  edit(id:number){
    var index = this.data.findIndex(value => value.id ===id)
    this.data[index]
    this.name=this.data[index].name
    this.id=this.data[index].id
    console.log(this.data[index])
  }
  update(){
    var index = this.data.findIndex(value => value.id ===this.id)
    this.data[index]
   this.data[index].name= this.name

    console.log(this.data[index])
  }
}
