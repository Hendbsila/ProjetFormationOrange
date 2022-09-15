import { Injectable } from '@angular/core';
import { Session } from '../models/Session';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {
  link='http://localhost:8050/sessions';

  constructor(private http: HttpClient) { }

  addSession(newS){
    return this.http.post(`${this.link}/add`,newS);
  }
  getSessions(){
    return this.http.get<Session[]>(`${this.link}/`)
  }
  getSessionById(id){
    return this.http.get(`${this.link}/${id}`)
  }
  deleteSession(id){
    return this.http.delete(`${this.link}/${id}`)
  }
  updateSession(newS){
    return this.http.put(`${this.link}/update/${newS.id}`,newS)
  }
}
