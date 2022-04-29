import { Injectable } from '@angular/core';
import { Service } from '../shared/service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>('services');
  }

  getService(id: string): Observable<Service>{
    return this.http.get<Service>('services/' + id);
  }

  getServiceIds(): Observable<string[]>{
    return this.getServices().pipe(map(services => services.map(service => service.id)))
  }
}
