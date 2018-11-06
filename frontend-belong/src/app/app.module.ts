import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatToolbarModule } from  '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './components/users/users.component';
import { CreateUserComponent } from './components/users/create-user/create-user.component';
import { UsersService } from './services/users.service';
import { UserItemComponent } from './components/users/user-item/user-item.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CreateUserComponent,
    UserItemComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],

  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
