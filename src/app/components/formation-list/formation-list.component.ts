import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route } from '@angular/router';
import { FormationService } from 'src/app/services/formation.service';


@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {
  listformation
  list
  constructor(private FormServ:FormationService, private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    
      this.FormServ.getFormations().subscribe({
        next:(res)=>{
          this.list=res
          
          if (this.activatedRoute.snapshot.paramMap.get('id')=='all'){
            this.listformation=this.list;
            console.log(this.listformation);
            
  
            
  
          } else{
            this.listformation=this.list.filter(l=>l.theme.id==this.activatedRoute.snapshot.paramMap.get('id'))
          }
        
        
        
        }, error: (err) => {
        }
        });
    
    };
      

    
   
  }

  

