import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '', redirectTo: 'product', pathMatch: 'full'
      },
      {
        path: 'product', loadChildren: () => import('./modules/product.module').then(m => m.ProductModule)
      },
      {
        path: 'order', loadChildren: () => import('./modules/orders.module').then(m => m.OrdersModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
