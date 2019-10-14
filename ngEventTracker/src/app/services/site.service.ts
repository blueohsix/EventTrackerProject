import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Site } from '../models/site';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
//  private sitesUrl = 'http://localhost:8085/api/sites/'; // development
//  private siteUrl = 'http://localhost:8085/api/site/';  // development
    private sitesUrl = '/EventTracker/api/sites/'; // production
    private siteUrl = '/EventTracker/api/site/'; // production


  constructor(private http: HttpClient) { }

  index() {
    return this.http.get<Site[]>(this.sitesUrl).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('site.service.ts index error');
      })
    );
  }

  create(site: Site) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.siteUrl, site, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('site.service.ts create error');
      })
    );
  }

  destroy(id) {
    return this.http.delete(this.siteUrl + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('site.service.ts delete error');
      })
    );
  }

  update(site: Site) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put(this.siteUrl + site.id, site, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Site.service.ts update error');
      })
    );
  }

}
