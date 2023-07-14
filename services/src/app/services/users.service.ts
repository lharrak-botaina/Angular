import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http :HttpClient) { }
  getUsers(){
    const headers = new HttpHeaders({
      'content-type':'application/json',
      'authenticationToken':'1234'
    });
    const params =new HttpParams()
    .set('pageNum','10')
    .set('pageSize','100')
    return this.http.post('http://localhost:8000/users',{headers:headers,params:params})

    // const users=[
    //   {id:1,name:'botaina'},
    //   {id:2,name:'LHARRAK'}
    // ]
    // return users;
  }
}
