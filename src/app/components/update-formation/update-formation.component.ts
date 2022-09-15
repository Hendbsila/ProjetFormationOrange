import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormateurServiceService } from 'src/app/services/formateur-service.service';
import { FormationService } from 'src/app/services/formation.service';
import { ThemeSerrviceService } from 'src/app/services/theme-serrvice.service';

@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrls: ['./update-formation.component.css']
})
export class UpdateFormationComponent implements OnInit {
  myFormation
  listTheme
  listFormateur

  constructor(private FormServ:FormationService, private router:Router, private activatedRoute:ActivatedRoute, private ThemeServ: ThemeSerrviceService, private FormateurServ:FormateurServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.FormServ.getFormationById(p.get('id')).subscribe({
          next: (response) => {
            this.myFormation = response;
            console.log(this.myFormation);
            
          },
          error: (err) => {
            console.log('Probleme avec getFormationById');
          },
        });
      },
      error: (err) => {
        console.log('Probleme avec paramMap');
      },
    });

    this.ThemeServ.getThemes().subscribe({
      next:(res)=>{
        this.listTheme=res
       console.log(this.listTheme);
       
        
       },
       
    })
    this.FormateurServ.getFormateurs().subscribe({
      next: (res) => {
        console.log(res);
        this.listFormateur = res;
    }, error: (err) => {
      console.log(err);
    }
    }) 
  }
  modifFormation(newF){
   
    newF.id=this.myFormation.id
    return this.FormServ.updateFormation(newF).subscribe({
      next:(res)=>{
        console.log(res);
        this.router.navigateByUrl('/formations');
      },
      error: (err) => {
        console.log('probleme avec modifier thème')
      }

    })

  }

}
