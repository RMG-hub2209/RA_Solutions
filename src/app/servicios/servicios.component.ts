import { Component, OnInit } from '@angular/core';
import { Service } from '../shared/service';
import { SERVICES } from '../shared/services';
// import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  services: Service[] = SERVICES;

  constructor() { }

  ngOnInit(): void {
   
  }

}
