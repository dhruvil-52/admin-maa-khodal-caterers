import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = `${environment.url}`;
  constructor(private http: HttpClient) { }

  get(endPoint: string, queryParams: any) {
    return this.http.get<any>(this.url + '/' + endPoint, {
      headers: {
      }, params: queryParams
    });
  }

  post(endPoint: string, queryParams: any) {
    return this.http.post<any>(this.url + '/' + endPoint, JSON.stringify(queryParams), {
      headers: {
        "content-type": "application/json"
      }
    });
  }
}
