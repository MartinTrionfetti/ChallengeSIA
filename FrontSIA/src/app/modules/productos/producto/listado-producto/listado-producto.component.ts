import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Producto } from 'src/model/producto';
import { ProductoRegistroService } from '../producto-registro.service';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css']
})
export class ListadoProductoComponent implements OnInit, OnDestroy {
  displayStyle = "none";
  public listarProducto: Producto[] = [];
  private destroy$ = new Subject();

  constructor(private productoRegistroService: ProductoRegistroService){

  }

  ngOnDestroy(): void {
    this.destroy$.unsubscribe();  
  }

  ngOnInit(): void {
    this.listar();
  }
  

  openPopup(esEditar: boolean = false) {
    this.displayStyle = "block";
    if (!esEditar) this.productoRegistroService.ProductoEditar = null;
  }

  closePopup() {
    this.displayStyle = "none";
  }

  volver() {
    window.location.href = "/";
  }

  onEditar(id: number){
    this.obtenerPorId(id);
  }
  
  private obtenerPorId(id: number) {
    this.productoRegistroService.obtenerPorId(id).pipe(takeUntil(this.destroy$)).subscribe(data =>{
      this.productoRegistroService.ProductoEditar = data;
      this.openPopup(true);
    });
  }

  private listar() {
    this.productoRegistroService.listar().pipe(takeUntil(this.destroy$)).subscribe(data =>{
      this.listarProducto = data;
    });
  }

  onCerrarModal(event: boolean){
    if (event) {
      this.closePopup();
      this.listar();
    }
  }
  onEliminar(id: number){
    this.eliminar(id);
  }
  private eliminar(id: number) {
    this.productoRegistroService.eliminar(id).pipe(takeUntil(this.destroy$)).subscribe(data =>{
      if (data) this.listar();
    });
  }

}
