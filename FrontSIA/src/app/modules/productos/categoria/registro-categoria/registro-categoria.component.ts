import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Categoria } from 'src/model/categoria';
import Swal from 'sweetalert2';
import { CategoriaRegistroService } from '../categoria-registro.service';

@Component({
  selector: 'app-registro-categoria',
  templateUrl: './registro-categoria.component.html',
  styleUrls: ['./registro-categoria.component.css']
})
export class RegistroCategoriaComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  @Output() cerrarModal = new EventEmitter<boolean>();
  @Input() categoriaEdit: Categoria | undefined;
  public formCategoria!: FormGroup;

  constructor(private categoriaRegistroService: CategoriaRegistroService) {
    this.inicializarForm();
    this.categoriaRegistroService.CategoriaEditar.subscribe((data: Categoria)=>{
      this.inicializarEditForm(data);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.unsubscribe();
  }

  ngOnInit(): void {
    this.inicializarForm();
  }
  private inicializarEditForm(categoria: Categoria) {
    this.formCategoria = this.categoriaRegistroService.inicializarForm(categoria);
  }

  private inicializarForm() {
    this.formCategoria = this.categoriaRegistroService.inicializarForm(null);
  }
  
  private mensajeGrabacion(esGrabacionOk: boolean, mensaje: string) {

    Swal.fire({
      icon: esGrabacionOk? 'success': 'error',
      title: 'Registro de Categoria',
      text: mensaje
    });
  }
  public onCerrar() {
    this.cerrarModal.emit(true);
  }
  public onGuardar() {
    let categoria: Categoria = this.formCategoria.value;
    if (categoria.CategoryId > 0)
      this.categoriaRegistroService.modificar(categoria).pipe(takeUntil(this.destroy$)).subscribe(data =>{
        let mensaje: string = data.IsSuccess? "Guardado Correctamente." : data.Errors;
        this.mensajeGrabacion(data.IsSuccess, mensaje)
        this.onCerrar();
      });
    else
      this.categoriaRegistroService.guardar(categoria).pipe(takeUntil(this.destroy$)).subscribe(data =>{
        let mensaje: string = data.IsSuccess? "Guardado Correctamente." : data.Errors;
        this.mensajeGrabacion(data.IsSuccess, mensaje)
        this.onCerrar();
      });
  }

}
