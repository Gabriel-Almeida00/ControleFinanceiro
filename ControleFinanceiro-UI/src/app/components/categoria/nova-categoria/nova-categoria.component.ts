import { CategoriasService } from './../../../services/categorias.service';
import { TiposService } from './../../../services/tipos.service';
import { Component, OnInit } from '@angular/core';
import { Tipo } from 'src/app/models/Tipo';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-categoria',
  templateUrl: './nova-categoria.component.html',
  styleUrls: ['../listagem-categoria/listagem-categoria.component.css']
})
export class NovaCategoriaComponent implements OnInit {
  formulario: any;
  tipos: Tipo[] | undefined;

  constructor(
    private tipoService: TiposService,
    private categoriasService: CategoriasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tipoService.PegarTodos().subscribe((resultado) => {
      this.tipos = resultado;
      console.log(resultado);
    });

    this.formulario = new FormGroup({
      nome: new FormControl(null),
      icone: new FormControl(null),
      tipoId: new FormControl(null),
    });
  }

  get propriedade() {
    return this.formulario.controls;
  }

  EnviarFormulario(): void {
    const categoria = this.formulario.value;
    this.categoriasService.NovaCategoria(categoria).subscribe((resultado) => {
      this.router.navigate(['categorias/listagemcategorias']);
    });
  }

  VoltarListagem(): void {
    this.router.navigate(['categorias/listagemcategorias']);
  }
}
