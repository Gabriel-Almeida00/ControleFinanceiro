import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listagem-categoria',
  templateUrl: './listagem-categoria.component.html',
  styleUrls: ['./listagem-categoria.component.css']
})
export class ListagemCategoriaComponent implements OnInit {

  categorias = new MatTableDataSource<any>();
  displayedColumns: string[] | undefined;

  constructor(private categoriasService : CategoriasService) { }

  ngOnInit(): void {
    this.categoriasService.PegarTodos().subscribe((resultado) => {
      this.categorias.data = resultado;
  });

  this.displayedColumns = this.ExibirColunas();
  }

  ExibirColunas(): string[] {
    return ['nome', 'icone', 'tipo', 'acoes'];
  }
}
