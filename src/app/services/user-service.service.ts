import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  link='http://localhost:8050/';
  constructor( private http:HttpClient) { }

addUser(newU){
  return this.http.post(`${this.link}/add`,newU);
}
getUsers(){
  return this.http.get<User[]>(`${this.link}/`)
}
getUserById(id){
  return this.http.get(`${this.link}/${id}`)
}
deleteUser(id){
  return this.http.delete(`${this.link}/${id}`)
}
updateUser(newU){
  return this.http.put(`${this.link}/update/${newU.id}`,newU)
}

}
