import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from './product/list/list.component';
import {CreateComponent} from './product/create/create.component';
import {UpdateComponent} from './product/update/update.component';
import {DeleteComponent} from './product/delete/delete.component';


const routes: Routes = [
    {
      path: 'product/list',
      component: ListComponent
    },
    {
      path: 'product/create',
      component: CreateComponent
    },
    {
      path: 'product/update/:id',
      component: UpdateComponent
    },
  {
    path: 'product/delete/:id',
    component: DeleteComponent
  }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
