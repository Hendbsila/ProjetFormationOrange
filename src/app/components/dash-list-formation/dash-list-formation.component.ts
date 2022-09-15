import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormateurServiceService } from 'src/app/services/formateur-service.service';
import { FormationService } from 'src/app/services/formation.service';
import { ThemeSerrviceService } from 'src/app/services/theme-serrvice.service';

@Component({
  selector: 'app-dash-list-formation',
  templateUrl: './dash-list-formation.component.html',
  styleUrls: ['./dash-list-formation.component.css']
})
export class DashListFormationComponent implements OnInit {

  listofFormation
  constructor(private formServ: FormationService, private router: Router, private ThemeServ: ThemeSerrviceService, private FormateurServ: FormateurServiceService) { }

  ngOnInit(): void {

     this.formServ.getFormations().subscribe({
      next: (res) => {
        this.listofFormation = res;
        console.log(res);
      },
    })

  }

  SupprimerFormation(id) {

    if (confirm("etes vous sur de vouloir supprimer la formation ?")) {

      this.formServ.deleteFormation(id).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigateByUrl('/formations');
        },
        error: (err) => {
          console.log('probleme avec supprimer formation')
        }

      })


    }
  }
}



