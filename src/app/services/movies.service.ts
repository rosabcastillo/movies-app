import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=7f1866737b00fad1a3cdf45ded5b25ce');
  }
}
