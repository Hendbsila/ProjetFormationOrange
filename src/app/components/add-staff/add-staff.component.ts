import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormateurServiceService } from 'src/app/services/formateur-service.service';
import { RoleServiceService } from 'src/app/services/role-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {
  regArry:any={}
  passwordPtn ='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'
  cinPtn='[0-9]{8}'
  listofFormateurs
  listofUsers
  listofRoles
  constructor(private UserServ:UserServiceService, private FormateurServ:FormateurServiceService,private router:Router, private RoleServ:RoleServiceService) { }

  ngOnInit(): void {
    this.FormateurServ.getFormateurs().subscribe({
      next:(res)=>{
       this.listofFormateurs=res
      },

    })
    this.UserServ.getUsers().subscribe({
      next:(res)=>{
       this.listofUsers=res
      },

    })
    this.RoleServ.getRoles().subscribe({
      next:(res)=>{
       this.listofRoles=res
       console.log(this.listofRoles);
       
      },

    })
  }
  addStaff(newU){
          this.FormateurServ.addFormateur(newU).subscribe({
      next:(res)=>{
        console.log(res);
        // this.router.navigateByUrl('/acceuil'); 
      },
      error: (err) => {
        console.log('probleme avec ajout staff')
      } 

  })

    
  }

  SupprimerFormateur(id){
    
    if (confirm("etes vous sur de vouloir supprimer le formateur ?")){
    
      this.FormateurServ.deleteFormateur(id).subscribe({
        next:(res)=>{
          console.log(res);
          this.router.navigateByUrl('/adminPage/gestEquipe');
        },
        error: (err) => {
          console.log('probleme avec supprimer formateur')
        }
  
      })


    }
  }
  addUser(newU){
    this.UserServ.addUser(newU).subscribe({
      next:(res)=>{
        console.log(res);
        // this.router.navigateByUrl('/acceuil'); 
      },
      error: (err) => {
        console.log('probleme avec ajouter user')
      } 

  })
}
}



