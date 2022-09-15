import { Component, OnInit, Output } from '@angular/core';
import { ThemeSerrviceService } from 'src/app/services/theme-serrvice.service';


@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit {
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
