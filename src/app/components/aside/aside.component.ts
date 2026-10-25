import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  imports: [],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  ciudad = 'Málaga';
  telefono = '600 123 123';
  email = 'sergiore2007@gmail.com';
  github = 'github.com/SergioRE2007';
  idiomas = ['Español', 'Inglés'];

  mostrarContacto = true;

  cambiarContacto() {
    this.mostrarContacto = !this.mostrarContacto;
  }
}
