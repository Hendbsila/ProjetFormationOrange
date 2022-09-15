import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
const AUTH_API = 'http://localhost:8050/auth/' ;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor( private http:HttpClient, private token: TokenStorageService ) { }
  

  toLogin(user): Observable<any>{
    return this.http.post(AUTH_API + 'signin', user, httpOptions);
  }
  toRegister(user): Observable<any>{
    return this.http.post(AUTH_API + 'signup', user, httpOptions);
  }

 isLoggedIn(){
  let token =  window.sessionStorage.getItem('auth-user');
  if (token) return true;
  else return false;

 }
 tologout(){
  window.sessionStorage.removeItem('auth-user');
  localStorage.removeItem('auth-user');
  
 }
roleAs
 getRole() {
  this.roleAs = window.sessionStorage.getItem('roles');
  return this.roleAs;
}
currentUser
public isAdmin(): boolean{
  if (!this.isLoggedIn()){
    return false;
  }
  this.currentUser=this.token.getUser();
  const roles= this.currentUser.roles;
  if (roles.indexOf('ROLE_ADMIN')< 0){
    return false;
  }
  return true;

}

public isFormateur(): boolean{
  if (!this.isLoggedIn()){
    return false;
  }
  this.currentUser=this.token.getUser();
  const roles= this.currentUser.roles;
  if (roles.indexOf('ROLE_FORM')< 0){
    return false;
  }
  return true;

}

  
}
