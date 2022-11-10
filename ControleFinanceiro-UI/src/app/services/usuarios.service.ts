import { DadosRegistro } from './../models/DadosRegistro';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

const httpOptions2 = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('TokenUsuarioLogado')}`,
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  url = 'api/Usuarios';

  constructor(private http: HttpClient) {}

  SalvarFoto(formData: any): Observable<any> {
    const apiUrl = `${this.url}/SalvarFoto`;
    return this.http.post<any>(apiUrl, formData);
  }

  RegistrarUsuario(dadosRegistro: DadosRegistro): Observable<any> {
    const apiUrl = `${this.url}/RegistrarUsuario`;
    return this.http.post<DadosRegistro>(apiUrl, dadosRegistro, httpOptions);
  }

  RetornarFotoUsuario(id: string): Observable<any> {
    const apiUrl = `${this.url}/RetornarFotoUsuario/${id}`;
    return this.http.get<any>(apiUrl);
  }
}
