import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { TokenStorageService } from './../../services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;

  constructor(private tokenStorage:TokenStorageService, private UserServ:UserServiceService, private router:Router) { }
  regArry:any={}
  passwordPtn ='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'
  ngOnInit(): void {
    this.currentUser = this.tokenStorage.getUser();
    console.log(this.currentUser);
   
  }
  UpdateUser(newU){
    newU.id=this.currentUser.id
   
     return this.UserServ.updateUser(newU).subscribe({
      next:(res)=>{
        console.log(res);
        this.router.navigateByUrl('/acceuil');
      },
      error: (err) => {
        console.log('probleme avec modifier mon profile')
      }
  })
}
}
