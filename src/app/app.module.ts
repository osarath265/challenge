import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatTableModule } from '@angular/material/table'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ChallengeComponent } from './challenge/challenge.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {NgxSocialLoginModule} from 'ngx-social-login';
import { HomepageComponent } from './homepage/homepage.component';
import { SocketIoService } from './services/socket-io.service';



@NgModule({
  declarations: [
    AppComponent,
    ChallengeComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    NgxSocialLoginModule.init(
      {
        google: {
          client_id: '936139696936-dpso56ulprf0ncelrvfo7bq1l92d8efm.apps.googleusercontent.com'
        },
        facebook: {
          initOptions: {
            appId: '513415572601897'
          }
        }
      }
    )
  ],
  providers: [SocketIoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
