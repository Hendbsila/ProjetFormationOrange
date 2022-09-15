import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Theme } from '../models/Theme';




@Injectable({
  providedIn: 'root'
})
export class ThemeSerrviceService {
    link='http://localhost:8050/themes';

    constructor(private http: HttpClient) { }
    
    addTheme(newT){
      return this.http.post(`${this.link}/add`,newT);
    }
    getThemes(){
      return this.http.get<Theme[]>(`${this.link}/`)
    }
    getThemeById(id){
      return this.http.get(`${this.link}/${id}`)
    }
    deleteTheme(id){
      return this.http.delete(`${this.link}/${id}`)
    }
    updateTheme(newT){
      return this.http.put(`${this.link}/update/${newT.id}`,newT)
    }
}
