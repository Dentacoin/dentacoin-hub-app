import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AuthenticationServiceService} from "../_services/authentication-service.service";
import {RedirectsService} from "../_services/redirects.service";
import {HttpClient, HttpHeaders, HttpParams} from "../../../node_modules/@angular/common/http";
import {AdditionalService} from "../_services/additional.service";
import {TranslateService} from "@ngx-translate/core";
import {LanguageService} from "../_services/language.service";

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html'
})
export class ChangePasswordComponent implements OnInit {
    changePasswordForm: FormGroup;
    changePasswordFormSubmitted = false;
    differentPasswords = false;
    failedChangePassword = false;

    constructor(public formBuilder: FormBuilder, public authenticationServiceService: AuthenticationServiceService, public http: HttpClient, public activatedRoute: ActivatedRoute, public redirectsService: RedirectsService, public additionalService: AdditionalService, public translate: TranslateService, public languageService: LanguageService) {
    }

    ngOnInit() {
        if (this.authenticationServiceService.hasPatientStorageSession()) {
            // redirect to home if logged in
            this.redirectsService.redirectToLoggedHome();

        } else {
            this.changePasswordForm = this.formBuilder.group({
                password: new FormControl('', Validators.compose([
                    Validators.required, Validators.minLength(6), Validators.maxLength(20)
                ])),
                repeat_password: new FormControl('', Validators.compose([
                    Validators.required, Validators.minLength(6), Validators.maxLength(20)
                ]))
            });
        }
    }

    // convenience getter for easy access to form fields
    get change_password_form_data() {
        return this.changePasswordForm.controls;
    }

    // dentist trying to log in
    onchangePasswordFormSubmit() {
        this.differentPasswords = false;
        this.changePasswordFormSubmitted = true;

        // stop here if form is invalid
        if (this.changePasswordForm.invalid) {
            return;
        }

        if (this.change_password_form_data.password.value.trim() !== this.change_password_form_data.repeat_password.value.trim()) {
            this.differentPasswords = true;
            return;
        }

        const ParseHeaders = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };

        this.activatedRoute.params.subscribe( (params: Params) => {
            this.additionalService.showLoader();
            const body = new HttpParams().set('recoverToken', '123').set('password', this.change_password_form_data.password.value.trim());
            this.http.post('https://dcn-hub-app-api.dentacoin.com/patient/change-password', body.toString(), ParseHeaders).subscribe({
                next: (response: any) => {
                    this.additionalService.hideLoader();
                    if (response.success) {
                        this.redirectsService.redirectToPatientLogin('change-password');
                    } else if (response.errors) {
                        this.failedChangePassword = true;
                    }
                },
                error: error => this.authenticationServiceService.logout('patient')
            });
        });
    }
}
