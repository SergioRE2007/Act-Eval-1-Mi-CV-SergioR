import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgOptimizedImage, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cv';

  nombre = 'Sergio R. E.';
  profesion = 'Desarrollador de Aplicaciones Multiplataforma';
  frase = 'Apasionado por el desarrollo y las nuevas tecnologías.';

  ciudad = 'Málaga';
  telefono = '600 123 123';
  email = 'sergiore2007@gmail.com';
  github = 'github.com/SergioRE2007';
  idiomas = ['Español', 'Inglés'];

  sobreMi = 'Soy estudiante de DAM y me gusta mucho la programación, sobre todo el desarrollo web.';

  experiencias = [
    { id: 1, empresa: 'Tech Solutions', puesto: 'Desarrollador Junior', periodo: '2025 - 2026', descripcion: 'Desarrollo de páginas web con Angular.' },
    { id: 2, empresa: 'WebStudio', puesto: 'Programador en prácticas', periodo: '2024 - 2025', descripcion: 'Maquetación con HTML y CSS.' }
  ];

  formacion = ['Técnico Superior en DAM', 'Bachillerato Tecnológico'];

  tecnologias = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Java'];

  pie = 'Currículum desarrollado con Angular';
  fecha = new Date();
}
