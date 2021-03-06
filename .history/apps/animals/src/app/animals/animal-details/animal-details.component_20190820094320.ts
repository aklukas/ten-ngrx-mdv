import { Component, OnInit } from '@angular/core';
import { Animal } from '@ten-ngrx/core-data';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ten-ngrx-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.scss']
})
export class AnimalDetailsComponent implements OnInit {
  animalForm: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.animalForm = this.fb.group({
      id: null,
      name: '',
      height: '',
      mass: null,
      continent: ''
    });
  }

  save(animal: Animal){
    console.log(animal);
  }

  cancel() {
    this.animalForm.reset();
  }
}
