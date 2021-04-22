import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../services/produtos.service';
import { Produto } from '../models/produto';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  id: number;
  atualizaProduto: Produto;

  constructor(private  service: ProdutoService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getProdutoPorId(this.id);
    this.atualizaProduto = {
      id: null,
      nome: '',
      desc: '', 
      preco: null,
      dtAtualizacao: null,
    }
  }
  atualizar(){
    this.service.editarProduto(this.id, this.atualizaProduto);
  }

}
