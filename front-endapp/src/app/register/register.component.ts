import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {SharedService} from '../shared/shared.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  bankAccountNumber: string = "";
  pan: string = "";
  emailId: string = "";
  lastName: string = "";
  firstName: string = "";

  constructor(private router: Router , private http: HttpClient,
     private dataShare: SharedService )
  {
  }

  save(){
    let bodyData = {
      "bankAccountNumber": this. bankAccountNumber,
      "pan":this.pan,
      "emailId":this.emailId,
      "lastName":this.lastName,
      "firstName": this.firstName
    };
    this.http.post("http://localhost:8080/api/v1/user/register",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        // alert("User Registered Successfully");
        this.dataShare.setData(bodyData);
        this.router.navigateByUrl('/data');
    });
  }
}
