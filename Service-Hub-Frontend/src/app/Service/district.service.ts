import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { District } from '../Models/District.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private baseurl = "http://localhost:5018/api/District/cityid";
  getAll(): Observable<District[]> {
    return this.http.get<District[]>(this.baseurl);
  }
  constructor(public http: HttpClient) { }
}
