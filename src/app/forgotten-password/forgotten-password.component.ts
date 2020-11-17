import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationServiceService} from '../_services/authentication-service.service';
import {RedirectsService} from '../_services/redirects.service';
import {HttpClient, HttpParams} from '../../../node_modules/@angular/common/http';
import {RequestsService} from '../_services/requests.service';
import {AdditionalService} from '../_services/additional.service';
import {TranslateService} from '@ngx-translate/core';
import {LanguageService} from '../_services/language.service';

@Component({
    selector: 'app-forgotten-password',
    templateUrl: './forgotten-password.component.html'
})
export class ForgottenPasswordComponent implements OnInit {
    forgottenPasswordForm: FormGroup;
    forgottenPasswordFormSubmitted = false;
    sendFormSucceed = false;
    sendFormFailed = false;

    constructor(public router: Router, public formBuilder: FormBuilder, public authenticationServiceService: AuthenticationServiceService, public redirectsService: RedirectsService, public http: HttpClient, public requestsService: RequestsService, public additionalService: AdditionalService, public translate: TranslateService, public languageService: LanguageService) {

    }

    ngOnInit() {
        if (this.authenticationServiceService.hasPatientStorageSession()) {
            // redirect to home if logged in
            this.redirectsService.redirectToLoggedHome();

        } else {
            this.forgottenPasswordForm = this.formBuilder.group({
                email: new FormControl('', Validators.compose([
                    Validators.required,
                    Validators.email
                ]))
            });
        }
    }

    // convenience getter for easy access to form fields
    get forgotten_password_form_data() {
        return this.forgottenPasswordForm.controls;
    }

    // on request form account submit
    onForgottenPasswordFormSubmit() {
        this.additionalService.showLoader();
        this.forgottenPasswordFormSubmitted = true;

        // stop here if form is invalid
        if (this.forgottenPasswordForm.invalid) {
            this.additionalService.hideLoader();
            return;
        }

        let paramsMap = new Map<any, any>();
        paramsMap.set('email', this.forgotten_password_form_data.email.value);
        paramsMap.set('type_language', this.translate.currentLang);

        let params = new HttpParams();
        paramsMap.forEach((value: any, key: any) => {
            params = params.set(key, value);
        });

        this.requestsService.requestForgottenPasswordToken(params.toString()).subscribe((response: any) => {
            if (response.success) {
                this.forgottenPasswordForm.reset();

                Object.keys(this.forgottenPasswordForm.controls).forEach(key => {
                    this.forgottenPasswordForm.get(key).setErrors(null);
                });

                this.sendFormSucceed = true;
                this.sendFormFailed = false;
                this.additionalService.hideLoader();
            } else {
                this.sendFormFailed = true;
                this.sendFormSucceed = false;
                this.additionalService.hideLoader();
            }
        });
    }

}
