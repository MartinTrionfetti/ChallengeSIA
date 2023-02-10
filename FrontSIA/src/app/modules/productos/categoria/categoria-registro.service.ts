import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Categoria } from 'src/model/categoria';
import { CategoriaResultado } from 'src/model/categoria-resultado';
import { CategoriaService } from 'src/service/categoria.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaRegistroService {

  private _categoriaEditar: BehaviorSubject<Categoria> = new BehaviorSubject<Categoria>(new Categoria());

  constructor(private categoriaService: CategoriaService, private formBuilder: FormBuilder) { }

  set CategoriaEditar(value: any) {
    this._categoriaEditar.next(value);
  }
  get CategoriaEditar() {
    return this._categoriaEditar.asObservable();
  }

  public inicializarForm(categoria: Categoria | null = null): FormGroup {
    if (categoria!=null){
      return this.formBuilder.group({
        CategoryId: categoria.CategoryId,
        Name: categoria.Name,
    });
    }else{
      return this.formBuilder.group({
        CategoryId: [0],
        Name: ['', Validators.required],
    });
    }

  }

  public obtenerPorId(id: number): Observable<Categoria> {
    return this.categoriaService.obtener(id).pipe(map((data: Categoria) => { return data; }));
  }

  public listar(): Observable<Categoria[]> {
    return this.categoriaService.listar().pipe(map((data: Categoria[]) => { return data; }));
  }

  public guardar(categoria: Categoria): Observable<CategoriaResultado> {
    return this.categoriaService.guardar(categoria).pipe(map((data: CategoriaResultado) => { return data; }));
  }

  public modificar(categoria: Categoria): Observable<CategoriaResultado> {
    return this.categoriaService.modificar(categoria).pipe(map((data: CategoriaResultado) => { return data; }));
  }

  public eliminar(id: number): Observable<boolean> {
    return this.categoriaService.eliminar(id).pipe(map((data: boolean) => { return data; }));
  }


}
