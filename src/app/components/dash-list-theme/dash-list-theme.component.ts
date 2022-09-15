import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeSerrviceService } from 'src/app/services/theme-serrvice.service';

@Component({
  selector: 'app-dash-list-theme',
  templateUrl: './dash-list-theme.component.html',
  styleUrls: ['./dash-list-theme.component.css']
})
export class DashListThemeComponent implements OnInit {
  listoftheme


  constructor(private ThemSer:ThemeSerrviceService, private router : Router) { }

  ngOnInit(): void {
    this.ThemSer.getThemes().subscribe({

      next:(res)=>{
      this.listoftheme=res
       
      }
  
      })
  }
  supprimerTheme(id){
    if (confirm("etes vous sur de vouloir supprimer le thème ?")){
      
      this.ThemSer.deleteTheme(id).subscribe({
        next:(res)=>{
          console.log(res);
          this.router.navigateByUrl('/themes');
        },
        error: (err) => {
          console.log('probleme avec supprimer theme')
        }
  
      })
    }

  


  }
}
