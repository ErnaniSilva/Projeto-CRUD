import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute) { }

  public produtoNome;
  public produtoDesc;
  public produtoPreco;
  /*está passando o produto, porem as informações não estão nos lugares certos  */

  ngOnInit(): void {
    this.produtoNome = (this.activatedRoute.snapshot.paramMap.get('nome'));
    this.produtoDesc = (this.activatedRoute.snapshot.paramMap.get('desc'));
    this.produtoPreco =(this.activatedRoute.snapshot.paramMap.get('preco'));
  }

}
