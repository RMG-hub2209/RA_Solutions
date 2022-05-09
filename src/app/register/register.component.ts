import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RegisterComponent>) {
   }

  ngOnInit(): void {
  }

  register= {
    name: '',
    email: '',
    password: '',
    remember: false
  }

  onRegister(){
    console.log(this.register);
    this.dialogRef.close();
  }

}
