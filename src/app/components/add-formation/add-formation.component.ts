import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { ThemeSerrviceService } from 'src/app/services/theme-serrvice.service';
import { FormationService } from './../../services/formation.service';
import { FormateurServiceService } from 'src/app/services/formateur-service.service';
import { Formateur } from 'src/app/models/Formateur';
import { Theme } from 'src/app/models/Theme';
import { Formation } from 'src/app/models/Formation';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {

  constructor(private formServ: FormationService, private router: Router, private ThemeServ: ThemeSerrviceService, private FormateurServ: FormateurServiceService) { }
  listTheme : Theme[];
  listFormateur 
  listofFormation : Formation[];
  //selectedObject : Theme
  ngOnInit(): void {
    this.ThemeServ.getThemes().subscribe({
      next: (res) => {
        console.log(res);
        this.listTheme = res
      },

    }),

    this.FormateurServ.getFormateurs().subscribe({
      next: (res) => {
        console.log(res);
        this.listFormateur = res;
    }, error: (err) => {
      console.log(err);
    }
    }),
   
     this.formServ.getFormations().subscribe({
      next: (res) => {
        this.listofFormation = res;
        console.log(res);
      },
    })

  }

  addFormation(newF) {
    console.log(newF);
    this.formServ.addFormation(newF).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl('/formations/all');
      },
      error: (err) => {
        console.log('probleme avec ajout formation')
      }
    });
  }
  
  docvalue
  modify(id){
    console.log(id);
    this.docvalue = this.listTheme.find(x => x.id == id);
    console.log(this.docvalue);
  }

  

 
}
