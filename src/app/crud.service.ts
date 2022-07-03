import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private api: string = 'http://localhost:8080/v1/api/location/outlet/item-list';
  private getStoreService: string = 'http://localhost:8080/v1/api/location/distance';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjdXN0b21lcjQiLCJyb2xlcyI6WyJjdXN0b21lciJdLCJpc3MiOiIvbG9naW4iLCJleHAiOjE2NTY4NDQ2ODZ9.c_M-roNpcn-hi3O1u7kIHmikxAv3Pq_YpNPP8cgoaTQ',
      'Access-Control-Allow-Origin': '*'
    }),
  };
  body={"outletName": "Taco Bell"};
  
  locationRequest={
    "currentLocation":{
        "latitude":12.95,
        "longitude":77.50
    }
}
  
  
  constructor(private httpClient: HttpClient) {}
  getData(): Observable<any[]> {
    return this.httpClient.post<any[]>(this.api,this.body,this.httpOptions);
  }

  getStore(): Observable<any[]> {
    return this.httpClient.post<any[]>(this.getStoreService,this.locationRequest,this.httpOptions);
  }
}