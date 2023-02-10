import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Categoria } from 'src/model/categoria';
import { Observable } from 'rxjs';
import { CategoriaResultado } from 'src/model/categoria-resultado';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private url: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public obtener(id:number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.url}category/${id}`);
  }

  public listar(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.url}category`);
  }
  
  public guardar(categoria: Categoria): Observable<CategoriaResultado> {
    const jsonCategoria = JSON.parse(JSON.stringify(categoria));
    return this.http.post<CategoriaResultado>(`${this.url}category`,jsonCategoria);
  }

  public modificar(categoria: Categoria): Observable<CategoriaResultado> {
    const jsonCategoria = JSON.parse(JSON.stringify(categoria));
    return this.http.put<CategoriaResultado>(`${this.url}category`,jsonCategoria);
  }

  public eliminar(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}category/${id}`);
  }

}
