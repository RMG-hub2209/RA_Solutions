import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/shared/service';
import { SERVICES } from 'src/app/shared/services';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.scss']
})
export class SoporteComponent implements OnInit {

  services: Service[] = SERVICES;

  constructor() { }

  ngOnInit(): void {
  }

}
