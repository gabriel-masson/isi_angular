import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../alunos/aluno.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-criar-aluno',
  templateUrl: './criar-aluno.component.html',
  styleUrls: ['./criar-aluno.component.css']
})
export class CriarAlunoComponent implements OnInit {

  //Criando a instacia do formulario
  formulario!: FormGroup;
  constructor(private service: AlunoService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //criando a estrura de dados que o formulario deve conter
    this.formulario = this.formBuilder.group({
      name: [''],
      idade: [''],
      titulo: [''],
      linha_de_pesquisa: ['']
    })
  }
  //esse função é chamada ao clicar no botão
  createAluno() {
    //passando o valores que pegamos do nosso form
    this.service.create(this.formulario.value).subscribe();
    window.location.reload();
  }

}
