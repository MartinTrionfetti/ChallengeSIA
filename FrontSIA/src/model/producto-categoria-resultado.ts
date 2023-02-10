import { Categoria } from "./categoria";
import { Producto } from "./producto";

export class ProductoCategoriaResultado {
    producto: Producto= new Producto();
    categoria: Categoria = new Categoria();
    errors: string = "";
    isSuccess:boolean = false;
}