import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


declare var $ :any;
import { UserService } from '../user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })

export class LoginComponent implements OnInit {
    
    public userInfo:any={
        username: '',
        password: '',
        //login_count: 0
      };

    public list:any[];

    constructor(private router:Router,private userService:UserService){}

    ngOnInit(){

    }  

    dologin(){
      let massages:any={           //Define login apl for Safer Payments
        "request": "login", 
        "data": { "login": this.userInfo.username,
                  "password": this.userInfo.password
                 }
      };
      console.log(massages);
      this.userService.getAPIData(massages).subscribe((data:any)=>{
        this.list = data.body;
        console.log(this.list);
        let result_code=this.list['responseStatus'];

        console.log(this.list);
        console.log(result_code);

        if (result_code[0] == "OK"){
          
          alert("successful.")
          this.router.navigate(['/home']);
        }else{
          alert("unsuccessful.")
          this.router.navigate(['/login']);
        }
            
          
        
      })
    }

}