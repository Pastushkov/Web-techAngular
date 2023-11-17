import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { RxFormBuilder } from "@rxweb/reactive-form-validators";
import { AuthorizationRoles } from "src/app/configs/auth-roles";
import { UserRegistration } from "src/app/core/models/auth/UserRegistration";
import { AlertService } from "src/app/core/services/Alert.service";
import { AuthenticationService } from "src/app/core/services/AuthenticationService.service";
import { EventEmitterService } from "src/app/core/services/EventEmitterService.service";
import { InputValidationService } from "src/app/core/services/InputValidationService.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private formBuilder: RxFormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private eventEmitterService: EventEmitterService,
    private alertService: AlertService,
    public validationService: InputValidationService
  ) {}
  ngOnInit() {
    let userRegister = new UserRegistration();
    this.formGroup = this.formBuilder.formGroup(userRegister);
  }
  async register() {
    this.authenticationService
      .registration({...this.formGroup.value, birthday: new Date()})
      .subscribe(() => {
        this.alertService.successAlert("Successful", "Register");
        this.router.navigate(["login"]);
        this.eventEmitterService.onComponentInvoke();
      });
  }
  getControl(controlName: string): any {
    return this.formGroup.get(controlName);
  }
  get userRoles(): typeof AuthorizationRoles {
    return AuthorizationRoles;
  }
}
