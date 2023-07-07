import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  email: string = "";
  password: string = "";

  constructor(private router: Router ,private http: HttpClient )
  {
  }

  Login(){
    let bodyData = {
      "email": this.email,
      "password":this.password,

    };
    this.http.post("http://localhost:8080/api/v1/user/login",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        this.router.navigateByUrl('/register');
    });
  }
}
