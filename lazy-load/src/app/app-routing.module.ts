import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeatureComponent } from './feature/feature.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'feature', component: FeatureComponent},
  { path: 'user',
    loadChildren: () => import('./user/user.module').
    then(x=> x.UserModule)
  },
  { path: 'customer',
    loadChildren: () => import('./customer/customer.module').
    then(x=> x.CustomerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
