import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from 'src/app/models/Session';
import { SessionServiceService } from 'src/app/services/session-service.service';

@Component({
  selector: 'app-dash-list-session',
  templateUrl: './dash-list-session.component.html',
  styleUrls: ['./dash-list-session.component.css']
})
export class DashListSessionComponent implements OnInit {
  listofsessions

  constructor(private SessServ:SessionServiceService, private router:Router) { }
  
  ngOnInit(): void {

    this.SessServ.getSessions().subscribe({
      next: (res)=> {
        this.listofsessions= res;
        console.log(res);
      }, error: (err) =>{
        console.log(err);
      }
    });
    
  }

  SupprimerSession(id){
    
    if (confirm("etes vous sur de vouloir supprimer la session ?")){
    
      this.SessServ.deleteSession(id).subscribe({
        next:(res)=>{
          console.log(res);
          this.router.navigateByUrl('/sessions');
        },
        error: (err) => {
          console.log('probleme avec supprimer session')
        }
  
      })


    }
  }


}
