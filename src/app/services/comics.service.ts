import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  URL_API = 'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=de5f5f4e69cb1cfdfbbf3790c0980506&hash=41f8f9bae312b2308e72bacdf430dd65';

  constructor(
    private http: HttpClient
  ) { }

  getAllComics(): Observable<any> {
    return this.http.get(this.URL_API);
  }
}
