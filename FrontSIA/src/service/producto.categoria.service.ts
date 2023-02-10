import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductoCategoria } from 'src/model/producto-categoria';

@Injectable({
  providedIn: 'root'
})
export class ProductoCategoriaService {
  private url: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public listar(): Observable<ProductoCategoria[]> {
    return this.http.get<ProductoCategoria[]>(`${this.url}Categoria/Listar`, { 'withCredentials': true });
  }

  public guardar(productoCategoria: ProductoCategoria): Observable<boolean> {
    return this.http.post<boolean>(`${this.url}Categoria/Guardar`,{productoCategoria}, { 'withCredentials': true });
  }

  public modificar(productoCategoria: ProductoCategoria): Observable<boolean> {
    return this.http.put<boolean>(`${this.url}Categoria/Guardar`,{productoCategoria}, { 'withCredentials': true });
  }

  public eliminar(productoCategoria: ProductoCategoria): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}Categoria/Guardar`, { 'withCredentials': true });
  }


}
