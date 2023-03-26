import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlunoService } from './componentes/alunos/aluno.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'isiFront';
  alunos: any[] = [];

  constructor(private service: AlunoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((alunos) => {
      this.alunos = alunos;
    });
  }

  delete(aluno: any){
    this.service.excluir(aluno.name).subscribe();
    this.recarregarPagina();
  }

  //use esse metodo todas as vezes que vc tenha mostrar os dados atualizados
  recarregarPagina() {
    window.location.reload();
  }


}
//,