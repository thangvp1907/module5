import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from './product/list/list.component';
import {CreateComponent} from './product/create/create.component';
import {UpdateComponent} from './product/update/update.component';
import {DeleteComponent} from './product/delete/delete.component';


const routes: Routes = [
    {
      path: 'product',
      loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
