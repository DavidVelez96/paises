import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private url = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  public getPaises() {
    return this
      .http
      .get(`${this.url}/all`);
  }

  public getPais(paramNombre: string) {
    return this
      .http
      .get(`${this.url}/name/${paramNombre}`);
  }
}
