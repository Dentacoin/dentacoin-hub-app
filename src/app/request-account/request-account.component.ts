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
    selector: 'app-request-account',
    templateUrl: './request-account.component.html'
})
export class RequestAccountComponent implements OnInit {
    requestAccountForm: FormGroup;
    requestAccountFormSubmitted: boolean = false;
    sendRequestSucceed: boolean = false;
    sendRequestFailed: boolean = false;
    public notValidPhone: boolean = false;
    public showCountries: boolean = false;
    countriesList = {};

    constructor(public router: Router, public formBuilder: FormBuilder, public authenticationServiceService: AuthenticationServiceService, public redirectsService: RedirectsService, public http: HttpClient, public requestsService: RequestsService, public additionalService: AdditionalService, public translate: TranslateService, public languageService: LanguageService) {

    }

    ngOnInit() {
        if (this.authenticationServiceService.hasPatientStorageSession()) {
            // redirect to home if logged in
            this.redirectsService.redirectToLoggedHome();

        } else {
            this.requestsService.getCountries().subscribe((response: any) => {
                if (response.success && response.data) {
                    this.countriesList = response.data;
                    this.showCountries = true;
                }
            });

            this.requestAccountForm = this.formBuilder.group({
                firstName: new FormControl('', Validators.compose([
                    Validators.required, Validators.maxLength(100)
                ])),
                lastName: new FormControl('', Validators.compose([
                    Validators.required, Validators.maxLength(100)
                ])),
                email: new FormControl('', Validators.compose([
                    Validators.required,
                    Validators.email
                ])),
                country: new FormControl('', Validators.compose([
                    Validators.required
                ])),
                phone: new FormControl('', Validators.compose([
                    Validators.required, Validators.maxLength(20)
                ])),
                dentistName: new FormControl('', Validators.compose([
                    Validators.required, Validators.maxLength(200)
                ])),
                privacyPolicy: new FormControl('', Validators.requiredTrue)
            });
        }
    }

    get isPatientPrivacyAccepted() {
        return this.requestAccountForm.get('privacyPolicy');
    }

    // convenience getter for easy access to form fields
    get request_form_data() { return this.requestAccountForm.controls; }

    // on request form account submit
    onAccountRequestFormSubmit() {
        this.additionalService.showLoader();
        this.requestAccountFormSubmitted = true;
        this.notValidPhone = false;

        // stop here if form is invalid
        if (this.requestAccountForm.invalid) {
            this.additionalService.hideLoader();
            return;
        }

        let paramsMap = new Map<any,any>();
        paramsMap.set('firstName', this.request_form_data.firstName.value);
        paramsMap.set('lastName', this.request_form_data.lastName.value);
        paramsMap.set('email', this.request_form_data.email.value);
        paramsMap.set('country', this.request_form_data.country.value);
        paramsMap.set('phone', this.request_form_data.phone.value);
        paramsMap.set('dentistName', this.request_form_data.dentistName.value);
        /*paramsMap.set('captcha', this.request_form_data.captcha.value);*/

        let params = new HttpParams();
        paramsMap.forEach((value: any, key: any) => {
            params = params.set(key, value);
        });

        this.requestsService.validatePhone(new HttpParams().set('phone', this.request_form_data.phone.value).set('country_code', this.request_form_data.country.value).toString()).subscribe((validatePhoneResponse: any) => {
            if (validatePhoneResponse.success) {
                this.requestsService.sendRequestAccountMail(params.toString()).subscribe((response: any) => {
                    if (response.success) {
                        this.requestAccountForm.reset();

                        Object.keys(this.requestAccountForm.controls).forEach(key => {
                            this.requestAccountForm.get(key).setErrors(null) ;
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
            } else {
                this.notValidPhone = true;
                this.additionalService.hideLoader();
            }
        });
    }
}
