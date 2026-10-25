import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cidade } from '../cidade';

@Component({
  selector: 'app-cidade-component',
  standalone: false,
  templateUrl: './cidade-component.html',
  styleUrl: './cidade-component.css'
})
export class CidadeComponentComponent {
  cidades: Cidade[] = [];
  formGroupCidade: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroupCidade = formBuilder.group({
      id: [''],
      nome: [''],
      estado: [''],
      populacao: [''],
      descricao: ['']
    });
  }

  save() {
    this.cidades.push(this.formGroupCidade.value);
    this.formGroupCidade.reset();
  }
}