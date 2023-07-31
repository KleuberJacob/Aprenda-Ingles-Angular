import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Coracao } from 'src/app/shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {
  @Input() public tentativas: number

  public coracoes: Array<Coracao> = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ]

  constructor() {}

  ngOnChanges() {
    if(this.coracoes.length !== this.tentativas) {
        let indice = this.coracoes.length - this.tentativas
        this.coracoes[indice - 1].cheio = false
    }
    this.tentativas
  }

  ngOnInit(): void {}

}