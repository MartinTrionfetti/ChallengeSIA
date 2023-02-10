import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Producto } from 'src/model/producto';
import { ProductoResultado } from 'src/model/producto-resultado';
import { ProductoService } from 'src/service/producto.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoRegistroService {

  private _productoEditar: BehaviorSubject<Producto> = new BehaviorSubject<Producto>(new Producto());

  constructor(private productoService: ProductoService, private formBuilder: FormBuilder) { }

  set ProductoEditar(value: any) {
    this._productoEditar.next(value);
  }
  get ProductoEditar() {
    return this._productoEditar.asObservable();
  }

  public inicializarForm(producto: Producto | null = null): FormGroup {
    if (producto!=null){
      return this.formBuilder.group({
        ProductId: [producto.ProductId],
        Name: [producto.Name],
        Description: [producto.Description],
        Image: [producto.Image],
    });
    }else{
      return this.formBuilder.group({
        ProductId: [0],
        Name: [''],
        Description: [''],
        Image: [''],
    });
    }
  }

  public obtenerPorId(id: number): Observable<Producto> {
    return this.productoService.obtener(id).pipe(map((data: Producto) => { return data; }));
  }

  public listar(): Observable<Producto[]> {
    return this.productoService.listar().pipe(map((data: Producto[]) => { return data; }));
  }

  public guardar(producto: Producto): Observable<ProductoResultado> {
    return this.productoService.guardar(producto).pipe(map((data: ProductoResultado) => { return data; }));
  }

  public modificar(producto: Producto): Observable<ProductoResultado> {
    return this.productoService.modificar(producto).pipe(map((data: ProductoResultado) => { return data; }));
  }

  public eliminar(id: number): Observable<boolean> {
    return this.productoService.eliminar(id).pipe(map((data: boolean) => { return data; }));
  }

}
