import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-aluno',
  templateUrl: './criar-aluno.component.html',
  styleUrls: ['./criar-aluno.component.css']
})
export class CriarAlunoComponent implements OnInit {

  aluno = {
    name: "Sadraque",
    idade: "22",
    titulo: "Mestrando",
    linha_de_pesquisa: "Inteligencia Artificial para cadaveres"
  }
  constructor() { }

  ngOnInit(): void {
  }

  createAluno(){
    alert("Ola mundo")
  }

}
