import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Categoria } from 'src/model/categoria';
import { CategoriaRegistroService } from '../categoria-registro.service';

@Component({
  selector: 'app-listado-categoria',
  templateUrl: './listado-categoria.component.html',
  styleUrls: ['./listado-categoria.component.css']
})
export class ListadoCategoriaComponent implements OnInit, OnDestroy {
  displayStyle = "none";
  public categoriaEdit!: Categoria;
  public listarCategoria: Categoria[] = [];
  private destroy$ = new Subject();

  constructor(private categoriaRegistroService: CategoriaRegistroService){

  }

  ngOnDestroy(): void {
    this.destroy$.unsubscribe();  
  }

  ngOnInit(): void {
    this.listar();
  }

  openPopup(esEditar: boolean = false) {
    this.displayStyle = "block";
    if (!esEditar) this.categoriaRegistroService.CategoriaEditar = null;
  }

  closePopup() {
    this.displayStyle = "none";
  }

  volver(){
    window.location.href = "/";
  }
  
  onCerrarModal(event: boolean){
    if (event) {
      this.closePopup();
      this.listar();
    }
  }

  onEditar(id: number){
    this.obtenerPorId(id);
  }

  onEliminar(id: number){
    this.eliminar(id);
  }

  private obtenerPorId(id: number) {
    this.categoriaRegistroService.obtenerPorId(id).pipe(takeUntil(this.destroy$)).subscribe(data =>{
      this.categoriaRegistroService.CategoriaEditar = data;
      this.openPopup(true);
    });
  }

  private listar() {
    this.categoriaRegistroService.listar().pipe(takeUntil(this.destroy$)).subscribe(data =>{
      this.listarCategoria = data;
    });
  }

  private eliminar(id: number) {
    this.categoriaRegistroService.eliminar(id).pipe(takeUntil(this.destroy$)).subscribe(data =>{
      if (data) this.listar();
    });
  }

}
