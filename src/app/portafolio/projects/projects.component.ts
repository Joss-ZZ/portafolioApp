import { Component, OnInit } from '@angular/core';

interface Project {
  imagen: string,
  titulo: string,
  descripcion: string,
  icons: string[],
  proyecto: string,
  codigo: string
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projectItems: Project[] = [
    {
      imagen: 'assets/images/peliculasApp.png',
      titulo: 'Películas App',
      descripcion: 'Proyecto desarrollado con Angular y la libreria PrimeNG, maquetado con CSS Grid y Flexbox. Consumo de datos a una Api REST y más...',
      icons: ['fa-html5', 'fa-css3-alt', 'fa-js-square', 'fa-angular'],
      proyecto: 'https://cranky-murdock-32ba46.netlify.app',
      codigo: 'https://github.com/Joss-ZZ/peliculasApp'
    },
    {
      imagen: 'assets/images/algoritmoDeBooth.png',
      titulo: 'Algoritmo de Booth',
      descripcion: 'Proyecto desarrollado con Vanilla JavaScript, HTML5 y animaciones en CSS3. El objetivo de este proyecto es poder visualizar de manera dinámica cómo realizar una multiplicación con este algoritmo',
      icons: ['fa-html5', 'fa-css3-alt', 'fa-js-square'],
      proyecto: 'https://joss-zz.github.io/AlgoritmoDeBooth/',
      codigo: 'https://github.com/Joss-ZZ/AlgoritmoDeBooth'
    },
    {
      imagen: 'assets/images/paisesApp.png',
      titulo: 'Países App',
      descripcion: 'Proyecto desarrollado con Angular y consumo de datos a través de una API RESTful de todos los países.',
      icons: ['fa-html5', 'fa-css3-alt', 'fa-js-square', 'fa-angular'],
      proyecto: 'https://gifted-poincare-501afe.netlify.app/',
      codigo: 'https://github.com/Joss-ZZ/paisesApp'
    }
  ]

}
