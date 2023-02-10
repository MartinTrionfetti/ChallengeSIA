import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Producto } from 'src/model/producto';
import Swal from 'sweetalert2';
import { ProductoRegistroService } from '../producto-registro.service';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.css']
})
export class RegistroProductoComponent implements OnInit, OnDestroy{
  private destroy$ = new Subject();
  @Output() cerrarModal = new EventEmitter<boolean>();
  public formProducto!: FormGroup;
  public file: string | ArrayBuffer | null = '';
  public esEditar: boolean = false;

  constructor(private productoRegistroService: ProductoRegistroService) {
    this.inicializarForm();
    this.productoRegistroService.ProductoEditar.subscribe((data: Producto)=>{
      this.inicializarEditForm(data);
      if(data != null) this.file = data.Image.toString();
    });
  }
  ngOnDestroy(): void {
    this.destroy$.unsubscribe();
  }

  ngOnInit(): void {

  }
  handleUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        console.log(reader.result);
        this.file = reader.result;
    };
  }

  private inicializarEditForm(producto: Producto) {
    this.formProducto = this.productoRegistroService.inicializarForm(producto);
  }

  private inicializarForm() {
    this.formProducto = this.productoRegistroService.inicializarForm();
  }
  private mensajeGrabacion(esGrabacionOk: boolean, mensaje: string) {

    Swal.fire({
      icon: esGrabacionOk? 'success': 'error',
      title: 'Registro de Producto',
      text: mensaje
    });
  }

  public onCerrar(){
    this.file = null;
    this.cerrarModal.emit(true);
  }

  public onGuardar() {
    let producto: Producto = this.formProducto.value;
    if (producto.ProductId > 0){
      if (this.file != undefined)
        producto.Image = this.file?.toString();
      this.productoRegistroService.modificar(producto).pipe(takeUntil(this.destroy$)).subscribe(data =>{
        let mensaje: string = data.IsSuccess? "Guardado Correctamente." : data.Errors;
        this.mensajeGrabacion(data.IsSuccess, mensaje)
        this.onCerrar();
      });
    }
    else{
      if (this.file != undefined)
        producto.Image = this.file?.toString();

      this.productoRegistroService.guardar(producto).pipe(takeUntil(this.destroy$)).subscribe(data =>{
        let mensaje: string = data.IsSuccess? "Guardado Correctamente." : data.Errors;
        this.mensajeGrabacion(data.IsSuccess, mensaje)
        this.onCerrar();
      });
    }

  }

}
