import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutsComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'product',
        loadChildren: './product/product.module#ProductModule'
      },
      //   {
      //     path: 'contact',
      //     loadChildren: './contact/contact.module#ContactModule'
      //   },
      {
        path: 'about',
        loadChildren: './about/about.module#AboutModule'
      }
      //   {
      //     path: 'shopping-cart',
      //     loadChildren: './shopping-cart/shopping-cart.module#ShoppingCartModule'
      //   }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
