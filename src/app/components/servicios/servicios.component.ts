import { Component, OnInit } from '@angular/core';
// import { Service } from 'src/app/shared/service';
// import { SERVICES } from 'src/app/shared/services';
// import { ServiceService } from '../services/service.service';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  faHouseChimney = faHouseChimney;

  // services: Service[] = SERVICES;

  constructor() { }

  ngOnInit(): void {
   
  }

}
