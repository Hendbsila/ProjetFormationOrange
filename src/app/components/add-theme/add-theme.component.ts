import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ThemeSerrviceService } from 'src/app/services/theme-serrvice.service';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent implements OnInit {
  listoftheme
  constructor(private ThemSer:ThemeSerrviceService, private router : Router) { }

  ngOnInit(): void {
   
  }

  addTheme(newT){
    console.log(newT);
    this.ThemSer.addTheme(newT).subscribe({
      next:(res)=>{
        console.log(res);
        this.router.navigateByUrl('/themes');
      },
      error: (err) => {
        console.log('probleme avec ajout theme')
      }
    });
   }

}
