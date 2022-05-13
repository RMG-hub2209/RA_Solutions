import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { faUserAstronaut, faComputer, faAddressCard } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  faUserAstronaut = faUserAstronaut;
  faComputer = faComputer;
  faAddressCard = faAddressCard;

  ngOnInit(): void {
  }

  openRegForm(){
    const dialogRef = this.dialog.open(RegisterComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
