import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationServiceService} from '../_services/authentication-service.service';
import {HttpClient, HttpHeaders, HttpParams} from '../../../node_modules/@angular/common/http';
import {ActivatedRoute, Params} from '@angular/router';
import {RedirectsService} from '../_services/redirects.service';
import {AdditionalService} from '../_services/additional.service';
import {TranslateService} from '@ngx-translate/core';
import {LanguageService} from '../_services/language.service';

@Component({
    selector: 'app-verify-account',
    templateUrl: './verify-account.component.html'
})
export class VerifyAccountComponent implements OnInit {
    verifyAccountForm: FormGroup;
    verifyAccountFormSubmitted = false;
    differentPasswords = false;
    failedVerifiedAccount = false;

    constructor(public formBuilder: FormBuilder, public authenticationServiceService: AuthenticationServiceService, public http: HttpClient, public activatedRoute: ActivatedRoute, public redirectsService: RedirectsService, public additionalService: AdditionalService, public translate: TranslateService, public languageService: LanguageService) {
    }

    ngOnInit() {
        if (this.authenticationServiceService.hasPatientStorageSession()) {
            // redirect to home if logged in
            this.redirectsService.redirectToLoggedHome();

        } else {
            this.verifyAccountForm = this.formBuilder.group({
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
    get verify_account_form_data() {
        return this.verifyAccountForm.controls;
    }

    // dentist trying to log in
    onVerifyAccountFormSubmit() {
        this.differentPasswords = false;
        this.verifyAccountFormSubmitted = true;

        // stop here if form is invalid
        if (this.verifyAccountForm.invalid) {
            return;
        }

        if (this.verify_account_form_data.password.value.trim() !== this.verify_account_form_data.repeat_password.value.trim()) {
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
            const body = new HttpParams().set('password', this.verify_account_form_data.password.value.trim()).set('type_language', this.translate.currentLang);
            this.http.post('https://dcn-hub-app-api.dentacoin.com/external-api/validate-token/' + params['token'], body.toString(), ParseHeaders).subscribe((response: any) => {
                this.additionalService.hideLoader();
                if (response.success) {
                    this.redirectsService.redirectToPatientLogin('account-verification');
                } else if (response.errors) {
                    this.failedVerifiedAccount = true;
                }
            });
        });
    }
}
