import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ProdutoService } from '../services/produtos.service';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss']
})
export class AdicionarComponent implements OnInit {

  productForm: FormGroup;

  novoProduto: Produto = {
    id: null,
    nome: '',
    desc: '', 
    preco: null,
    dtAtualizacao: null,
  }
  
  constructor(private formBuilder: FormBuilder,private  service: ProdutoService) { }

  ngOnInit(): void {

    this.productForm = this.formBuilder.group({
      'nome': [null, Validators.required],
      'desc': [null, Validators.required],
      'preco': [null, Validators.required],
    });

  }
  /* pegar os dados e montar em um objeto, e deppois pegar o metodo addProduto pegando o produto */

  addProduto(form: NgForm){
    this.service.cadastrarProduto(this.novoProduto);
    console.log(form);
  }
}
