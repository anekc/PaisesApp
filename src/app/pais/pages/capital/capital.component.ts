import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [
  ]
})
export class CapitalComponent  {

  termino: string = '';
  hayError: boolean = false;

  paises: Country[] = [];

  constructor(private pais: PaisService) { }

  buscar(termino: string){
    this.hayError= false;
    this.termino = termino;
    console.log(this.termino);

    this.pais.buscarCapital(this.termino).subscribe( paises =>{
      this.paises = paises;
      console.log(paises);
    }, err => {
      console.log(err);
      this.hayError = true;
      this.paises = [];
    })
  }

  
}
