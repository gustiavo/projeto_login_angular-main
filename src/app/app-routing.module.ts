import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncioComponent } from './incio/incio.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'incio', component: IncioComponent},
  {path:'login', component: LoginComponent},
  {path:'', redirectTo:'/incio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
