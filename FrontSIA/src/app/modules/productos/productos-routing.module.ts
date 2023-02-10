import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProductoCategoriaComponent } from './producto-categoria/producto-categoria.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [

  { path: 'producto', component: ProductoComponent,  pathMatch: 'full'},
  { path: 'categoria', component: CategoriaComponent,  pathMatch: 'full'},
  { path: 'asociacion', component: ProductoCategoriaComponent,  pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
