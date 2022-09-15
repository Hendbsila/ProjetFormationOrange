import { Component, OnInit } from '@angular/core';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import { ThemeSerrviceService } from 'src/app/services/theme-serrvice.service';


@Component({
  selector: 'app-update-theme',
  templateUrl: './update-theme.component.html',
  styleUrls: ['./update-theme.component.css']
})
export class UpdateThemeComponent implements OnInit {
   myTheme;

  constructor(private ThemServ:ThemeSerrviceService, 
    private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.ThemServ.getThemeById(p.get('id')).subscribe({
          next: (res) => {
            this.myTheme = res;
            console.log(this.myTheme);
            
            
          },
          error: (err) => {
            console.log(err);
            
            console.log('Probleme avec getThemeById');
          },
        });
      },
      error: (err) => {
        console.log(err);
        
        console.log('Probleme avec paramMap');
      },
    });
  }
  modifTheme(newT){
    newT.id=this.myTheme.id
    return this.ThemServ.updateTheme(newT).subscribe({
      next:(res)=>{
        console.log(res);
        this.router.navigateByUrl('/adminPage/addTheme');
      },
      error: (err) => {
        console.log('probleme avec modifier thème')
      }

    })


  }
}
