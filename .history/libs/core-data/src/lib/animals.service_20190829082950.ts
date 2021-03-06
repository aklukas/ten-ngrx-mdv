import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from './animal';
import { of } from 'rxjs';

const API = 'https://level-up-api-qllahajrnz.now.sh/animals';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get(API);
  }

  create(animal: Animal) {
    return this.http.post(API, animal);
  }

  update(animal: Animal) {
    console.log(animal.id)
    // return this.http.patch(`${API}/${animal.id}`, animal);
    return of(animal);
  }

  delete(animalId: number) {
    return this.http.delete(`${API}/${animalId}`);
  }
}
