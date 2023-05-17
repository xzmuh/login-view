import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NovoUsuario } from './Usuario';

@Injectable({
  providedIn: 'root'
})
export class GlobalServicesService {

  baseUrl = '';

  constructor( private httpClient: HttpClient ) { }

  novoUsuario(nome: string, email: string, senha: string) {
    const usuario = {
      nome:nome,
      email:email,
      senha:senha
    }
    return this.httpClient.post<NovoUsuario[]>(this.baseUrl, usuario);
  }

}
