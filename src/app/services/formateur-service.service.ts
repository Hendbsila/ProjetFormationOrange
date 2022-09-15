import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formateur } from '../models/Formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurServiceService {

  
  link='http://localhost:8050/formateurs';
  constructor( private http:HttpClient) { }

addFormateur(newF){
  return this.http.post(`${this.link}/add`,newF);
}
getFormateurs(){
  return this.http.get(`${this.link}/`)
}
getFormateurById(id){
  return this.http.get(`${this.link}/${id}`)
}
deleteFormateur(id){
  return this.http.delete(`${this.link}/${id}`)
}
updateFormateur(newF){
  return this.http.put(`${this.link}/update/${newF.id}`,newF)
}
}
