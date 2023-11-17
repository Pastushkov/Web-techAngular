import { MatCardModule } from '@angular/material/card';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatModule } from "./core/modules/mat.module";
import { LoginComponent } from "./pages/auth-components/login/login.component";
import { RegisterComponent } from "./pages/auth-components/register/register.component";
import { HeaderComponent } from "./pages/app-components/header/header.component";
import { JwtModule } from "@auth0/angular-jwt";
import { HomeComponent } from './pages/app-components/Home/Home.component';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UsersListComponent } from './pages/app-components/Home/admin-panel/users-list/users-list.component';
import { EditUserDialogComponent } from './pages/app-components/Home/admin-panel/edit-user-dialog/edit-user-dialog.component';
import { EnumNamePipe } from './core/pipes/EnumNamePipe';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    UsersListComponent,
    EditUserDialogComponent,
    EnumNamePipe
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RxReactiveFormsModule,
    HttpClientModule,
    MatModule,
    MatCardModule,
    FlexLayoutModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
      },
    }),
  ],
  providers: [AuthInterceptor, ErrorInterceptor],
  bootstrap: [AppComponent],
})
export class AppModule {}
