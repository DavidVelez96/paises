import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// service
import { PaisesService } from '../../services/paises/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
  public pais: any;
  public paises: any[];
  public paisSeleccionado: string;
  public resultado: boolean;

  constructor(
    private paisesService: PaisesService,
    private _router: Router
  ) {
    this.paisSeleccionado = '';
    this.resultado = false;
  }

  ngOnInit() {
    this.paisesService.getPaises().subscribe((data: any[]) => {
      this.paises = data;
    });
  }

  public seleccionarPais(paramPais: string): void {
    this.paisSeleccionado = paramPais;
    this.buscarPais(this.paisSeleccionado);
  };

  private buscarPais(paramPais: string): void {
    this.paisesService.getPais(paramPais).subscribe((data: any[]) => {
      this.pais = data[0];
      this.resultado = true;
    });
  }

  public logOut(): void {
    localStorage.removeItem('token');
    this._router.navigate(['/inicio']);
  }

}
