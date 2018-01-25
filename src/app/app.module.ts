import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AdminComponent } from './admin/admin.component';
import { FormComponent } from './form/form.component';
import { EditProjectComponent } from './edit-project/edit-project.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCYz0PfNaP_WRZNdmv_WW17xHxaIrEaVHc",
    authDomain: "stardew-valley-funds.firebaseapp.com",
    databaseURL: "https://stardew-valley-funds.firebaseio.com",
    projectId: "stardew-valley-funds",
    storageBucket: "stardew-valley-funds.appspot.com",
    messagingSenderId: "519808546429"
  };

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProjectDetailComponent,
    AdminComponent,
    FormComponent,
    EditProjectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
