import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'guia-restaurantes';
  restaurantes: string[][] = [["El Soperito","La victoria"]];
  @ViewChild('restaurante') restaurante: ElementRef;
  @ViewChild('ciudad') ciudad: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  agregar(restaurante: string, ciudad: string) {
    restaurante = restaurante.trim();
    ciudad = ciudad.trim();

    if (restaurante === '' || ciudad === ''){
      alert('Debe ingresar valores válidos')
      return;
    }

    for(let rest of this.restaurantes){
      if(restaurante.toUpperCase() === rest[0].toUpperCase() && ciudad.toUpperCase() === rest[1].toUpperCase() ){
        alert('Restaurante ya está registrado')
        return;
      }
    }
  

    console.log('Se agregó el elemento: ' + restaurante + '-'+ ciudad);
    this.restaurantes.push([restaurante,ciudad]);
    console.log(this.restaurantes);
    this.restaurante.nativeElement.value = '';
    this.ciudad.nativeElement.value = '';
  }
}
