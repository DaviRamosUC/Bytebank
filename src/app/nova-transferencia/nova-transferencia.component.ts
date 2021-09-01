import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {


  valor!: number;
  destino!: number;

  constructor(private service: TransferenciaService, private router: Router) { }

  transferir() {
    console.log('Solicitada nova transferência');

    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };

    this.service.adicionar(valorEmitir)
    this.router.navigateByUrl('extrato');
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

}
