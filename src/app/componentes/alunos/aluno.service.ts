import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' //Para fazer requisições http
import { Observable } from 'rxjs'; //classe para se trabalhar com dados assíncronos, utilizado principalmente para API
@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  URL = "http://localhost:3000/api/aluno" //requisições para url especificada


  constructor(private http: HttpClient) { }

  listar(): Observable<any []> {
    return this.http.get<any []>(this.URL) //Faz uma requisição do tipo get para url
  }
  // criar(aluno: Aluno): Observable<Aluno> {
  //   return this.http.post<Aluno>(this.URL, aluno);
  // }
  
    //o segundo paramêtro retorna o corpo da requisição do tipo any
   criar(any: any): Observable<any> {
    //emite um valor de um tipo any não especificado
     return this.http.post<any>(this.URL, any); //Faz uma requisição do tipo post para url
   }

  // atualizar(aluno: Aluno): Observable<Aluno> {
  //   const url = `${this.URL}/${aluno.id}`;
  //   return this.http.put<Aluno>(url, aluno);
  // }
  
     //Recebe dois parâmetros, o id, que será utilizado na url, e o aluno que será o objeto atualizado
   atualizar(id: string, aluno: any): Observable<any> {
     const url = `${this.URL}/${aluno.id}`; //o id do objeto que é passado como paramêtro
     return this.http.put<any>(url, aluno); //Faz uma requisição do tipo put para url, passando o objeto aluno atualizado
   }

  excluir(id: string): Observable<any> {
    const url = `${this.URL}/${id}`;
    return this.http.delete(url);
  }

}

