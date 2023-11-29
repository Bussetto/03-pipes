import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre = "Capitan America"
  nombre2 = "dAmiAN buSsETto"
  PI = Math.PI
  array = ['Thor', 'Iron Man', 'Spider Man']
  porcentaje = 0.432
  salario = 300000.56
  fecha = new Date()
  activar = true

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llego la data')
    }, 4500)
  })

  heroe = {
    nombre: 'peter',
    apellido: 'parker',
    clave: 'spider man',
    edad: 20,
    casa: {
      calle: 'la re calle',
      piso: 7
    }    
  }

}
