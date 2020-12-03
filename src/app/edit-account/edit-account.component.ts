import {Component, OnInit} from '@angular/core';
import {AuthenticationServiceService} from '../_services/authentication-service.service';
import {RedirectsService} from '../_services/redirects.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpParams} from '../../../node_modules/@angular/common/http';
import {RequestsService} from '../_services/requests.service';
import {AdditionalService} from '../_services/additional.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html'
})

export class EditAccountComponent implements OnInit {
    patientsEditAccountForm: FormGroup;
    patientsEditAccountFormSubmitted = false;
    public showCountries: boolean = false;
    countriesList = {};
    public showTitles: boolean = false;
    titlesList = {};
    patientData = {};
    patientName: string;
    patientEncryptedPassword: string;
    public editAccountSuccess: boolean = false;
    public editAccountFailed: boolean = false;
    public editPasswordFailed: boolean = false;
    public passwordsNotMatching: boolean = false;
    public updateCoreDBData: boolean = false;

    constructor(public authenticationServiceService: AuthenticationServiceService, public redirectsService: RedirectsService, public formBuilder: FormBuilder, public requestsService: RequestsService, public additionalService: AdditionalService) {
    }

    ngOnInit() {
        if (!this.authenticationServiceService.hasPatientStorageSession()) {
            this.redirectsService.redirectToPatientLogin('login');
        } else {
            this.additionalService.showLoader();

            this.patientsEditAccountForm = this.formBuilder.group({
                title: new FormControl('', Validators.compose([
                    Validators.required
                ])),
                firstName: new FormControl('', Validators.compose([
                    Validators.required, Validators.maxLength(100)
                ])),
                lastName: new FormControl('', Validators.compose([
                    Validators.required, Validators.maxLength(100)
                ])),
                phone: new FormControl('', Validators.compose([
                    Validators.required, Validators.maxLength(20)
                ])),
                country: new FormControl('', Validators.compose([
                    Validators.required
                ])),
                password: new FormControl('', Validators.compose([
                    Validators.minLength(6), Validators.maxLength(20)
                ])),
                repeatPassword: new FormControl('', Validators.compose([
                    Validators.minLength(6), Validators.maxLength(20)
                ]))
            });

            this.requestsService.getCountries().subscribe((response: any) => {
                if (response.success && response.data) {
                    this.countriesList = response.data;
                    this.showCountries = true;
                }
            });

            this.requestsService.getTitles().subscribe({
                next: (response:any) => {
                    if (response.success && response.data) {
                        this.titlesList = response.data.titles;
                        this.showTitles = true;
                    }
                },
                error: error => this.authenticationServiceService.logout('patient')
            });

            this.requestsService.getUserData(JSON.parse(window.localStorage.getItem('currentPatient')).token).subscribe({
                next: (response:any) => {
                    this.additionalService.hideLoader();
                    if (response.success && response.data) {
                        this.patientData = response.data;
                        this.patientName = response.data.name;
                        this.patientEncryptedPassword = response.data.password;
                        if (response.data.title !== '' && response.data.title !== null) {
                            this.patientsEditAccountForm.controls['title'].setValue(response.data.title);
                        }
                        if (response.data.name !== '' && response.data.name !== null) {
                            this.patientsEditAccountForm.controls['firstName'].setValue(response.data.name);
                        }
                        if (response.data.phone !== '' && response.data.phone !== null) {
                            this.patientsEditAccountForm.controls['phone'].setValue(response.data.phone);
                        }
                        if (response.data.country !== '' && response.data.country !== null) {
                            this.patientsEditAccountForm.controls['country'].setValue(response.data.country);
                        }
                    }
                },
                error: error => this.authenticationServiceService.logout('patient')
            });
        }
    }

    // convenience getter for easy access to form fields
    get patients_edit_account_form_data() { return this.patientsEditAccountForm.controls; }

    // patient trying to log in
    onPatientsEditAccountFormSubmit() {
        this.additionalService.showLoader();

        this.patientsEditAccountFormSubmitted = true;
        let paramsMap = new Map<any,any>();
        paramsMap.set('title', this.patients_edit_account_form_data.title.value);
        paramsMap.set('name', this.patients_edit_account_form_data.firstName.value);
        paramsMap.set('phone', this.patients_edit_account_form_data.phone.value);
        paramsMap.set('country', this.patients_edit_account_form_data.country.value);

        let coreDBparamsMap = new Map<any,any>();

        if (this.patients_edit_account_form_data.password.value.trim() !== '' || this.patients_edit_account_form_data.repeatPassword.value.trim() !== '') {
            if (this.patients_edit_account_form_data.password.value.trim() !== this.patients_edit_account_form_data.repeatPassword.value.trim()) {
                this.passwordsNotMatching = true;
            } else {
                this.passwordsNotMatching = false;
                this.updateCoreDBData = true;
                paramsMap.set('password', this.patients_edit_account_form_data.password.value.trim());
                coreDBparamsMap.set('password', this.patients_edit_account_form_data.password.value.trim());
                coreDBparamsMap.set('repeat-password', this.patients_edit_account_form_data.repeatPassword.value.trim());
            }
        }

        if (this.patients_edit_account_form_data.firstName.value.trim() !== '' || this.patients_edit_account_form_data.lastName.value.trim() !== '') {
            this.updateCoreDBData = true;
            coreDBparamsMap.set('name', this.patients_edit_account_form_data.firstName.value.trim() + ' ' + this.patients_edit_account_form_data.lastName.value.trim());
        }

        // stop here if form is invalid
        if (this.patientsEditAccountForm.invalid || this.passwordsNotMatching) {
            window.scrollTo(0, 0);
            this.additionalService.hideLoader();
            return;
        }

        let params = new HttpParams();
        paramsMap.forEach((value: any, key: any) => {
            params = params.set(key, value);
        });

        let coreDBparams = new HttpParams();
        coreDBparamsMap.forEach((value: any, key: any) => {
            coreDBparams = coreDBparams.set(key, value);
        });

        this.requestsService.editProfile(coreDBparams.toString(), JSON.parse(window.localStorage.getItem('currentPatient')).token).subscribe({
            next: (response: any) => {
                if (response.success) {
                    this.additionalService.hideLoader();
                    this.patientsEditAccountForm.controls['password'].setValue('');
                    this.patientsEditAccountForm.controls['repeatPassword'].setValue('');
                    this.editAccountSuccess = true;
                    window.scrollTo(0, 0);
                } else {
                    this.additionalService.hideLoader();
                    this.patientsEditAccountForm.controls['password'].setValue('');
                    this.patientsEditAccountForm.controls['repeatPassword'].setValue('');
                    this.editPasswordFailed = true;
                    window.scrollTo(0, 0);
                }
            },
            error: error => this.authenticationServiceService.logout('patient')
        });
    }
}
