import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-producto-categoria',
  templateUrl: './listado-producto-categoria.component.html',
  styleUrls: ['./listado-producto-categoria.component.css']
})
export class ListadoProductoCategoriaComponent {
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
