import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthenticationService } from "../services/AuthenticationService.service";
import { AuthorizationRoles } from "src/app/configs/auth-roles";
@Injectable({
  providedIn: "root",
})
export class AdminRoleGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}
  canActivate(): boolean {
    if (
      this.authenticationService.currentUser.role == AuthorizationRoles.Admin
    ) {
      return true;
    }
    this.router.navigate(["home"]);
    return false;
  }
}