import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  constructor(private http:HttpClient) { }
  link='http://localhost:8050/auth/roles';
  
  getRoles(){
    return this.http.get(`${this.link}`)
  }
}
