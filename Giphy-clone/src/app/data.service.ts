import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getSearch() {
    return this.http.get('http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=JdiUbzJPCMr3iqKJv6V8CCBIHu9nePk1=&limit=5')
    console.log()
  }
}
