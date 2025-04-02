import { Component } from '@angular/core';
import { MisDatosComponent } from './componentes/mis-datos/mis-datos.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MisDatosComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title: string = "";

  valorInput: string = "";

  constructor() {

  }

}
