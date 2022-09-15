import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormateurServiceService } from 'src/app/services/formateur-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  listofFormateurs
  listofUsers
  constructor(private FormateurServ:FormateurServiceService,private UserServ:UserServiceService, private router:Router) { }
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
  SupprimerUser(id){
    if (confirm("etes vous sur de vouloir supprimer l'utilisateur ?")){
    
      this.UserServ.deleteUser(id).subscribe({
        next:(res)=>{
          console.log(res);
          this.router.navigateByUrl('/adminPage/gestEquipe');
        },
        error: (err) => {
          console.log('probleme avec supprimer utilisateur')
        }
  
      })


    }
  }

}



