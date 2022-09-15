import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { SessionServiceService } from 'src/app/services/session-service.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  sessionList

  constructor(private SessServ:SessionServiceService, public logSe:LoginServiceService) { }

  ngOnInit(): void {
    this.SessServ.getSessions().subscribe({
      next: (res) => {
        console.log(res);
        this.sessionList=res.filter(res => res.sessionStatus==false)
        console.log(this.sessionList);
        
      },
      error: (err) => {
        console.log('probleme avec get session caroussel')
      }

    })
  }

}
