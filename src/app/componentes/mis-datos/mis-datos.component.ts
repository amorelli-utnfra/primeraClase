import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-datos',
  standalone: true,
  imports: [],
  templateUrl: './mis-datos.component.html',
  styleUrl: './mis-datos.component.scss'
})
export class MisDatosComponent implements OnInit {

  nombre: string = "";
  edad!: number;

  ngOnInit(): void {
    // Inicialización de datos
    this.nombre = "Juan Pérez";
    this.edad = 30;
    
  }

  sumarEdad() {
    this.edad++;
  }



}
