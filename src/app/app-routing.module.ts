import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormationComponent } from './components/add-formation/add-formation.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { AdminDashComponent } from './components/admin-dash/admin-dash.component';
import { ThemeListComponent } from './components/theme-list/theme-list.component';
import { FormationListComponent } from './components/formation-list/formation-list.component';
import { AddThemeComponent } from './components/add-theme/add-theme.component';
import { AddSessionComponent } from './components/add-session/add-session.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddStaffComponent } from './components/add-staff/add-staff.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UpdateThemeComponent } from './components/update-theme/update-theme.component';
import { UpdateSessionComponent } from './components/update-session/update-session.component';
import { UpdateFormationComponent } from './components/update-formation/update-formation.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SeprateListThemeComponent } from './components/seprate-list-theme/seprate-list-theme.component';
import { MesSessionsComponent } from './components/mes-sessions/mes-sessions.component';
import { SessionListComponent } from './components/session-list/session-list.component';
import { DashListThemeComponent } from './components/dash-list-theme/dash-list-theme.component';
import { DashListSessionComponent } from './components/dash-list-session/dash-list-session.component';
import { DashListFormationComponent } from './components/dash-list-formation/dash-list-formation.component';
import { FactureComponent } from './components/facture/facture.component';
import { PayementComponent } from './components/payement/payement.component';




const routes: Routes = [
  {path:'', redirectTo: 'acceuil', pathMatch: 'full'},
  {path:'acceuil' , component:AcceuilComponent},
  {path:'themes' , component:SeprateListThemeComponent},
  {path:'formations/:id', component:FormationListComponent},
  {path:'sessions/:id',component:SessionListComponent},
  {path:'payement/:id',component:PayementComponent },
  {path:'signup', component:SignUpComponent},
  {path:'signin', component:SignInComponent},
  {path:'profile/:id',component: ProfileComponent },
  {path:'mesSessions/:id',component:MesSessionsComponent },
  {path:'note-honoraire/:id',component:FactureComponent },
  
  
  {path: 'adminPage', component: DashboardComponent, 
   children:[
  {path:'addFormation', component:AddFormationComponent},
  {path:'addTheme', component:AddThemeComponent},
  {path:'addSession',component:AddSessionComponent },
  {path:'gestEquipe',component:AddStaffComponent},
  {path:'updateTheme',component:DashListThemeComponent,children:[
    {path:':id',component:UpdateThemeComponent},
  ]},
  {path:'updateSession',component:DashListSessionComponent, children:[
    {path:':id',component:UpdateSessionComponent},
  ]},
  {path:'updateFormation',component:DashListFormationComponent, children:[
    {path:':id',component:UpdateFormationComponent},
  ]},
  {path:'updateUser',component:UpdateUserComponent}
 
 ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
