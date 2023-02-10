import { Producto } from "./producto";

export class ProductoResultado {
    Product: Producto= new Producto();
    Errors: string = "";
    IsSuccess:boolean = false;
}