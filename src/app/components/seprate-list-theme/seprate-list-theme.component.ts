import { Component, OnInit } from '@angular/core';
import { ThemeSerrviceService } from 'src/app/services/theme-serrvice.service';

@Component({
  selector: 'app-seprate-list-theme',
  templateUrl: './seprate-list-theme.component.html',
  styleUrls: ['./seprate-list-theme.component.css']
})
export class SeprateListThemeComponent implements OnInit {
  listoftheme
  constructor(private ThemSer:ThemeSerrviceService) { }

  ngOnInit(): void {
    this.ThemSer.getThemes().subscribe({
      next:(res)=>{
      this.listoftheme=res;
      console.log(res);
      }, error: (err) => {
        console.log(err);
      }
      });
  }

}
