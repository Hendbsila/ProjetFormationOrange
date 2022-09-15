import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Session } from 'src/app/models/Session';
import { FormateurServiceService } from 'src/app/services/formateur-service.service';
import { FormationService } from 'src/app/services/formation.service';
import { SessionServiceService } from 'src/app/services/session-service.service';

@Component({
  selector: 'app-update-session',
  templateUrl: './update-session.component.html',
  styleUrls: ['./update-session.component.css']
})
export class UpdateSessionComponent implements OnInit {
  listFormation
  listFormateurs
  mySession
  forvalue
  formateur
  statusValue

  constructor(private FormSer:FormationService, private SessServ:SessionServiceService, private router:Router, private activatedRoute:ActivatedRoute, private FormatServ:FormateurServiceService  ) { }

  ngOnInit(): void {
    this.FormSer.getFormations().subscribe({
      next:(res)=>{
       this.listFormation=res
      },
  
    })
    this.FormatServ.getFormateurs().subscribe({
      next:(res)=>{
       this.listFormateurs=res
      },
  
    })

    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.SessServ.getSessionById(p.get('id')).subscribe({
          next: (response) => {
            this.mySession = response;
          },
          error: (err) => {
            console.log('Probleme avec getSessionById');
          },
        });
      },
      error: (err) => {
        console.log('Probleme avec paramMap');
      },
    });
  
  }
  modifSession (newS){
    newS.id=this.mySession.id
   
     return this.SessServ.updateSession(newS).subscribe({
      next:(res)=>{
        console.log(res);
        this.router.navigateByUrl('/adminPage/addSession');
      },
      error: (err) => {
        console.log('probleme avec modifier session')
      }

    })
    
// console.log(newS);

}
modify(id){
  this.forvalue= this.listFormation.find(x=> x.id == id);
  console.log(this.forvalue);
}

modifValue(id){
  this.formateur=this.listFormateurs.find(f=>f.id==id);
  console.log(this.formateur);
  

}

modifStatus(status){
  this.statusValue=this.mySession.sessionStatus
  console.log(this.formateur);
  

}
}
