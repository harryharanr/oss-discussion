import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http,HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './component/users/users.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
