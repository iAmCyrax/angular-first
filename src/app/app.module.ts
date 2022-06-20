import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import {
  ToolbarComponent,
  FormComponent,
  DeleteDialogComponent,
  CardComponent,
  CardListComponent,
  DeleteAllDialogComponent,
  LoginDialogComponent,
  LogoutDialogComponent,
  ActionsListComponent,
  ActionComponent
} from './components';
import { HomeComponent, ErrorComponent, AboutComponent, AdminDashboardComponent } from './pages';
import { LoggedService } from './services/logged.service';
import { LoginGuard } from './guards/login.guard';
import { SuperTitlePipe } from './pipes/super-title.pipe';
import { PasswordPipe } from './pipes/password.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    AboutComponent,
    ToolbarComponent,
    FormComponent,
    AdminDashboardComponent,
    DeleteDialogComponent,
    CardComponent,
    CardListComponent,
    DeleteAllDialogComponent,
    LoginDialogComponent,
    LogoutDialogComponent,
    ActionsListComponent,
    ActionComponent,
    SuperTitlePipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [LoggedService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
