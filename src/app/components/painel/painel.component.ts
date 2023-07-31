import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from 'src/app/shared/frase.model';
import { FRASES } from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnDestroy {
  
  public frases: Array<Frase> = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ""
  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number = 0
  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizarRodada()
  }

  ngOnDestroy(): void {}

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta() : void {   
    if(this.rodadaFrase.frasePtBr === this.resposta.trim()) {
      this.rodada++  

      if(this.rodada === 4) {
        this.encerrarJogo.emit("vitoria")
      }

      this.atualizarRodada()
      this.progresso = this.progresso + (100 / this.frases.length)      
    } else {
      this.tentativas -= 1
      
      if(this.tentativas == -1) {
        this.encerrarJogo.emit("derrota")
      }
    }    
  }

  public atualizarRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]      
    this.resposta = ""
  }

}
