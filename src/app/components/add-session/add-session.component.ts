import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Formateur } from 'src/app/models/Formateur';
import { Formation } from 'src/app/models/Formation';
import { Session } from 'src/app/models/Session';
import { FormateurServiceService } from 'src/app/services/formateur-service.service';
import { FormationService } from 'src/app/services/formation.service';
import { SessionServiceService } from 'src/app/services/session-service.service';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent implements OnInit {
listFormation:Formation[]
listofsessions:Session[]
listFormateur
forvalue
forma

  constructor(private FormSer: FormationService,
    private SessServ:SessionServiceService,
    private router:Router, private FormatServ:FormateurServiceService
    ) { }

  ngOnInit(): void {
    this.FormSer.getFormations().subscribe({
      next:(res)=>{
       this.listFormation=res
      },
    })

    this.SessServ.getSessions().subscribe({
      next: (res)=> {
        this.listofsessions= res;
        console.log(res);
      }, error: (err) =>{
        console.log(err);
      }
    });

    this.FormatServ.getFormateurs().subscribe({
      next: (res)=> {
        this.listFormateur= res;
        console.log(res);
      }, error: (err) =>{
        console.log(err);
      }
    });
    
  }
  addSession (newS){
    console.log(newS);
    this.SessServ.addSession(newS).subscribe({
      next:(res)=>{
        console.log(res);
        this.router.navigateByUrl('/adminPage/updateSession'); 
      },
      error: (err) => {
        console.log('probleme avec ajout session')
      }
    })
 
  
  
  }
  SupprimerSession(id){
    
    if (confirm("etes vous sur de vouloir supprimer la session ?")){
    
      this.SessServ.deleteSession(id).subscribe({
        next:(res)=>{
          console.log(res);
          this.router.navigateByUrl('/sessions/all');
        },
        error: (err) => {
          console.log('probleme avec supprimer session')
        }
  
      })


    }
  }

 
  modify(id){
    this.forvalue= this.listFormation.find(x=> x.id == id);
    console.log(this.forvalue);
  }

  modifValue(id){
    this.forma=this.listFormateur.find(f=>f.id==id);
    console.log(this.forma);
    

  }
}
