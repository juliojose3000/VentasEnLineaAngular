import { Injectable, Inject, OpaqueToken } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Pelicula } from "./pelicula.model";
import { Genero } from "./genero.model";
import { Actor } from "./actor.model";

import "rxjs/add/operator/map";

@Injectable()
export class PeliculaService {
  private url = 'http://localhost:8080/api/movies';
    constructor(private http: Http) { }
    
    findByTitleAndGenre(title:string, genre:string): Observable<Pelicula[]> {
      return this.http.get(this.url + '/' + title + '/' + genre).map(response => response.json());
  }
    getAll(): Observable<Pelicula[]> {
        return this.http.get(this.url + '/').map(response => response.json());
    }
}
