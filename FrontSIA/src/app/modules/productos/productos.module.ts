import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductoComponent } from './producto/producto.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProductoCategoriaComponent } from './producto-categoria/producto-categoria.component';
import { PrincipalComponent } from './principal/principal.component';
import { ListadoProductoComponent } from './producto/listado-producto/listado-producto.component';
import { RegistroProductoComponent } from './producto/registro-producto/registro-producto.component';
import { RegistroCategoriaComponent } from './categoria/registro-categoria/registro-categoria.component';
import { ListadoCategoriaComponent } from './categoria/listado-categoria/listado-categoria.component';
import { RegistroProductoCategoriaComponent } from './producto-categoria/registro-producto-categoria/registro-producto-categoria.component';
import { ListadoProductoCategoriaComponent } from './producto-categoria/listado-producto-categoria/listado-producto-categoria.component';
import { ReactiveFormsModule } from '@angular/forms';

const componentes = [
  ProductoComponent,
  CategoriaComponent,
  PrincipalComponent,
  ProductoCategoriaComponent
];

@NgModule({

  declarations: [
    componentes,
    ListadoProductoComponent,
    RegistroProductoComponent,
    RegistroCategoriaComponent,
    ListadoCategoriaComponent,
    RegistroProductoCategoriaComponent,
    ListadoProductoCategoriaComponent,    
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    componentes
  ]
})
export class ProductosModule { }
