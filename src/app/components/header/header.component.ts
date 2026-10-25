import { Component, input, output } from '@angular/core';

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

  seccionActiva = input<string>('resumen');
  seccionSeleccionada = output<string>();

  seleccionar(seccion: string) {
    this.seccionSeleccionada.emit(seccion);
  }
}
