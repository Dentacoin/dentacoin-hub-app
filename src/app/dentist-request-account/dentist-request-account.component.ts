import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationServiceService} from '../_services/authentication-service.service';
import {RedirectsService} from '../_services/redirects.service';
import {HttpClient, HttpParams} from '../../../node_modules/@angular/common/http';
import {RequestsService} from '../_services/requests.service';
import {AdditionalService} from '../_services/additional.service';
import {TranslateService} from '@ngx-translate/core';
import {LanguageService} from '../_services/language.service';

@Component({
  selector: 'app-dentist-request-account',
  templateUrl: './dentist-request-account.component.html'
})
export class DentistRequestAccountComponent implements OnInit {
    dentistRequestAccountForm: FormGroup;
    dentistRequestAccountFormSubmitted = false;
    sendRequestSucceed = false;
    sendRequestFailed = false;

    constructor(public router: Router, public formBuilder: FormBuilder, public authenticationServiceService: AuthenticationServiceService, public redirectsService: RedirectsService, public http: HttpClient, public requestsService: RequestsService, public additionalService: AdditionalService, public translate: TranslateService, public languageService: LanguageService) {

    }

    ngOnInit() {
        if (this.authenticationServiceService.hasPatientStorageSession()) {
            // redirect to home if logged in
            this.redirectsService.redirectToLoggedHome();

        } else {
            this.dentistRequestAccountForm = this.formBuilder.group({
                fullName: new FormControl('', Validators.compose([
                    Validators.required, Validators.maxLength(100)
                ])),
                email: new FormControl('', Validators.compose([
                    Validators.required,
                    Validators.email
                ])),
                practice: new FormControl('', Validators.compose([
                    Validators.required, Validators.maxLength(200)
                ])),
                website: new FormControl('', Validators.compose([
                    Validators.required, Validators.maxLength(500)
                ])),
                privacyPolicy: new FormControl('', Validators.requiredTrue)
            });
        }
    }

    get isDentistPrivacyAccepted() {
        return this.dentistRequestAccountForm.get('privacyPolicy');
    }

    // convenience getter for easy access to form fields
    get dentist_request_form_data() { return this.dentistRequestAccountForm.controls; }

    // on request form account submit
    onAccountRequestFormSubmit() {
        this.additionalService.showLoader();
        this.dentistRequestAccountFormSubmitted = true;

        // stop here if form is invalid
        if (this.dentistRequestAccountForm.invalid) {
            this.additionalService.hideLoader();
            return;
        }

        let paramsMap = new Map<any,any>();
        paramsMap.set('fullName', this.dentist_request_form_data.fullName.value);
        paramsMap.set('email', this.dentist_request_form_data.email.value);
        paramsMap.set('practice', this.dentist_request_form_data.practice.value);
        paramsMap.set('website', this.dentist_request_form_data.website.value);

        let params = new HttpParams();
        paramsMap.forEach((value: any, key: any) => {
            params = params.set(key, value);
        });

        this.requestsService.dentistSendRequestAccountMail(params.toString()).subscribe((response: any) => {
            if (response.success) {
                this.dentistRequestAccountForm.reset();

                Object.keys(this.dentistRequestAccountForm.controls).forEach(key => {
                    this.dentistRequestAccountForm.get(key).setErrors(null) ;
                });

                this.sendRequestSucceed = true;
                this.sendRequestFailed = false;
                this.additionalService.hideLoader();
            } else {
                this.sendRequestFailed = true;
                this.sendRequestSucceed = false;
                this.additionalService.hideLoader();
            }
        });
    }
}
