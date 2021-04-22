import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produtos.service';
import { Produto } from '../models/produto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  produtos: Array<Produto>;
  id : Produto;

  constructor(private  service: ProdutoService, private router: Router, private route: ActivatedRoute) { }

  onSelect(produto){
    this.router.navigate(['/produtos/detalhe', produto.nome]);
  }

  ngOnInit(): void {
    this.produtos = this.service.listarProdutos();
    //this.id = this.route.snapshot.paramMap.get(this.id);
  }

  deletar(){
    //this.service.excluir(this.id);
  }
}
