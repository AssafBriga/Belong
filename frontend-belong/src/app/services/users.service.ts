import { Injectable } from '@angular/core';
import { User } from '../components/users/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  uri:string = 'http://localhost:4000';
  

  createNewUser(userData){
     return this.http.post(`${this.uri}/createNewUser`,userData)
  };

  getUsers(){
     return this.http.get(`${this.uri}/getUsers`)
  };

  constructor(private http : HttpClient){}


};
