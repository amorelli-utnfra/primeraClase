import { Component } from '@angular/core';
import { MisDatosComponent } from './componentes/mis-datos/mis-datos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MisDatosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title: string = "";

  constructor() {

  }

}
