import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes  } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'


import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ManagementsComponent } from './managements/managements.component';
import { UserService } from './user.service'

const appRoutes: Routes =[
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'managements', component: ManagementsComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ManagementsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
