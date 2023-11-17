import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./pages/auth-components/login/login.component";
import { RegisterComponent } from "./pages/auth-components/register/register.component";
import { AuthGuard } from "./core/guards/AuthGuard";
import { AutoLoginGuard } from "./core/guards/AutoLoginGuard";
import { HomeComponent } from "./pages/app-components/Home/Home.component";
import { UsersListComponent } from "./pages/app-components/Home/admin-panel/users-list/users-list.component";
import { AdminRoleGuard } from "./core/guards/AdminRoleGuard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [AutoLoginGuard],
  },
  {
    path: "registration",
    component: RegisterComponent,
  },
  {
    path: "user-home",
    component: HomeComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: "users-list",
    component: UsersListComponent,
    canActivate: [AuthGuard,AdminRoleGuard],
  },
  {
    path: "**",
    redirectTo: "/login",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
