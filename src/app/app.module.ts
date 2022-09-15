import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { FormationListComponent } from './components/formation-list/formation-list.component';
import { AddFormationComponent } from './components/add-formation/add-formation.component';
import { FormsModule } from '@angular/forms';
import { AdminDashComponent } from './components/admin-dash/admin-dash.component';
import { AddThemeComponent } from './components/add-theme/add-theme.component';
import { AddSessionComponent } from './components/add-session/add-session.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddStaffComponent } from './components/add-staff/add-staff.component';
import { UpdateFormationComponent } from './components/update-formation/update-formation.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UpdateThemeComponent } from './components/update-theme/update-theme.component';
import { SessionListComponent } from './components/session-list/session-list.component';
import { UpdateSessionComponent } from './components/update-session/update-session.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ThemeListComponent } from './components/theme-list/theme-list.component';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { SeprateListThemeComponent } from './components/seprate-list-theme/seprate-list-theme.component';
import { MesSessionsComponent } from './components/mes-sessions/mes-sessions.component';
import { DashListThemeComponent } from './components/dash-list-theme/dash-list-theme.component';
import { DashListFormationComponent } from './components/dash-list-formation/dash-list-formation.component';
import { DashListSessionComponent } from './components/dash-list-session/dash-list-session.component';
import { FactureComponent } from './components/facture/facture.component';
import { ShortPipe } from './short.pipe';
import { StatutPipe } from './statut.pipe';
import { PayementComponent } from './components/payement/payement.component'; 

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ThemeListComponent,
    NavbarComponent,
    CarouselComponent,
    FormationListComponent,
    AddFormationComponent,
    AdminDashComponent,
    AddThemeComponent,
    AddSessionComponent,
    SignUpComponent,
    FooterComponent,
    DashboardComponent,
    AddStaffComponent,
    SignInComponent,
    UpdateSessionComponent,
    UpdateThemeComponent,
    UpdateFormationComponent,
    UpdateUserComponent,
    SessionListComponent,
    ListUsersComponent,
    ProfileComponent,
    SeprateListThemeComponent,
    MesSessionsComponent,
    DashListThemeComponent,
    DashListFormationComponent,
    DashListSessionComponent,
    FactureComponent,
    ShortPipe,
    StatutPipe,
    PayementComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
