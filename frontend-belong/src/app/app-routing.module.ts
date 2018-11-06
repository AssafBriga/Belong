import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { CreateUserComponent } from './components/users/create-user/create-user.component';

const routes: Routes = [
  {path:'users',component: UsersComponent},
  {path:'addUser',component: CreateUserComponent},
  {path: '',redirectTo: '/users', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
