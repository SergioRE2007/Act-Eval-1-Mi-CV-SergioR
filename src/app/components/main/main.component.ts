import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [NgOptimizedImage],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  sobreMi = 'Soy estudiante de DAM y me gusta mucho la programación, sobre todo el desarrollo web.';

  experiencias = [
    { id: 1, empresa: 'Tech Solutions', puesto: 'Desarrollador Junior', periodo: '2025 - 2026', descripcion: 'Desarrollo de páginas web con Angular.' },
    { id: 2, empresa: 'WebStudio', puesto: 'Programador en prácticas', periodo: '2024 - 2025', descripcion: 'Maquetación con HTML y CSS.' }
  ];

  formacion = ['Técnico Superior en DAM', 'Bachillerato Tecnológico'];

  tecnologias = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Java'];
}
