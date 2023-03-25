/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  URL = "http://localhost:3000/api/aluno"


  constructor(private http: HttpClient) { }

  listar(): Observable<any []> {
    return this.http.get<any []>(this.URL)
  }

}*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from './aluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  URL = "http://localhost:3000/api/aluno";

  constructor(private http: HttpClient) { }

  listar(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.URL);
  }

  criar(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.URL, aluno);
  }

  atualizar(aluno: Aluno): Observable<Aluno> {
    const url = `${this.URL}/${aluno.id}`;
    return this.http.put<Aluno>(url, aluno);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.URL}/${id}`;
    return this.http.delete(url);
  }
}
