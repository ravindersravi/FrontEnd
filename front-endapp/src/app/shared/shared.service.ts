import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  bankAccountNumber: string = "";
  pan: string = "";
  emailId: string = "";
  lastName: string = "";
  firstName: string = "";
  constructor() { }

  setData(data: any) {
    this.bankAccountNumber = data.bankAccountNumber;
    this.pan = data.pan;
    this.emailId = data.emailId;
    this.lastName = data.lastName;
    this.firstName = data.firstName;
  }

  getData() {
    return {
      bankAccountNumber: this.bankAccountNumber,
      pan: this.pan,
      emailId: this.emailId,
      lastName: this.lastName,
      firstName: this.firstName
    };
  }
}
