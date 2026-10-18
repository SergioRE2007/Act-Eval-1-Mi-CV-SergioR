import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  nombre = 'Sergio R. E.';
  profesion = 'Desarrollador de Aplicaciones Multiplataforma';
  frase = 'Apasionado por el desarrollo y las nuevas tecnologías.';
}
