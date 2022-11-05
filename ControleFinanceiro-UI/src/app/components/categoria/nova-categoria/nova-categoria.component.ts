import { TiposService } from './../../../services/tipos.service';
import { Component, OnInit } from '@angular/core';
import { Tipo } from 'src/app/models/Tipo';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nova-categoria',
  templateUrl: './nova-categoria.component.html',
  styleUrls: ['./nova-categoria.component.css']
})
export class NovaCategoriaComponent implements OnInit {

  formulario: any;
  tipos: Tipo[] | undefined;

  constructor(private tipoService: TiposService) { }

  ngOnInit(): void {
    this.tipoService.PegarTodos().subscribe(resultado => {
      this.tipos = resultado;
    });

    this.formulario = new FormGroup({
      nome : new FormControl(null),
      icone : new FormControl(null),
      tipoId : new FormControl(null),
    });
  }
  
  get propriedade() {
    return this.formulario.controls;
  }

}
