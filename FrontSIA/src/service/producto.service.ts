import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from 'src/model/producto';
import { ProductoResultado } from 'src/model/producto-resultado';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public obtener(id:number): Observable<Producto> {
    return this.http.get<Producto>(`${this.url}product/${id}`);
  }
  
  public listar(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.url}product`);
  }

  public guardar(producto: Producto): Observable<ProductoResultado> {
    const jsonProducto = JSON.parse(JSON.stringify(producto));
    return this.http.post<ProductoResultado>(`${this.url}product`,jsonProducto);
  }

  public modificar(producto: Producto): Observable<ProductoResultado> {
    const jsonProducto = JSON.parse(JSON.stringify(producto));
    return this.http.put<ProductoResultado>(`${this.url}product`,jsonProducto);
  }

  public eliminar(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}product/${id}`);
  }

}
