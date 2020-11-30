import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationServiceService} from '../_services/authentication-service.service';
import {RedirectsService} from '../_services/redirects.service';
import {HttpClient, HttpParams} from '../../../node_modules/@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {LanguageService} from '../_services/language.service';
import { environment } from '../../environments/environment';
import {RequestsService} from '../_services/requests.service';
import {AdditionalService} from '../_services/additional.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-patient-login-page',
  templateUrl: './patient-login-page.component.html'
})
export class PatientLoginPageComponent implements OnInit {
    coreDbApiDomain = environment.coreDbApiDomain;

    constructor(public router: Router, public authenticationServiceService: AuthenticationServiceService, public redirectsService: RedirectsService, public http: HttpClient, public translate: TranslateService, public languageService: LanguageService, public requestsService: RequestsService, public additionalService: AdditionalService) {
    }

    ngOnInit() {
        if (this.authenticationServiceService.hasPatientStorageSession()) {
            // redirect to home if logged in
            this.redirectsService.redirectToLoggedHome();
        } else {
            document.addEventListener('patientAuthSuccessResponse', (e: any) => {
                console.log(e, 'patientAuthSuccessResponse');
                this.onPatientsLogin(e.detail.response_data.token, e.detail.response_data.data.id, e.detail.response_data.data.patient_of);
            });

            document.addEventListener('receiveCoredbTokenFromCivicAuth', (e: any) => {
                console.log(e.detail.response_data, 'receiveCoredbTokenFromCivicAuth');
                console.log(e, 'receiveCoredbTokenFromCivicAuth');

                this.requestsService.getUserData(e.detail.response_data).subscribe({
                    next: (response: any) => {
                        if (response.success) {
                            this.onPatientsLogin(e.detail.response_data, response.data.id, response.data.patient_of);
                        } else {
                            this.authenticationServiceService.logout('patient')
                        }
                    },
                    error: error => this.authenticationServiceService.logout('patient')
                });
            });

            document.addEventListener('receivedFacebookToken', (e: any) => {
                this.additionalService.showLoader();
            });

            document.addEventListener('civicRead', (e: any) => {
                this.additionalService.showLoader();
            });

            document.addEventListener('hideGatewayLoader', (e: any) => {
                this.additionalService.hideLoader();
            });

            document.addEventListener('registeredAccountMissingEmail', (e: any) => {
                // COVER THIS !!!!!!!!!!!!!
                document.getElementById('patient-login-failed-missing-email').classList.remove('hide');
            });

            document.addEventListener('patientAuthErrorResponse', (e: any) => {
                console.log(e, 'e');
                document.getElementById('custom-error').classList.remove('hide');
                document.getElementById('custom-error').innerHTML = e.detail.response_data.errors.generic;
            });

            document.addEventListener('noCoreDBApiConnection', (e: any) => {
                document.getElementById('patient-login-failed').classList.remove('hide');
            });

            document.addEventListener('noExternalLoginProviderConnection', (e: any) => {
                document.getElementById('patient-login-failed').classList.remove('hide');
            });
        }
    }

    onPatientsLogin(_token: any, _id: any, _patient_of: any) {
        console.log(_token, _id, _patient_of, 'onPatientsLogin');
        if (_patient_of !== null && _patient_of !== undefined) {
            this.requestsService.coreDbLogin(new HttpParams().set('token', _token).set('id', _id).toString()).subscribe({
                next: (coredbResponse: any) => {
                    window.scrollTo(0, 0);

                    window.localStorage.setItem('currentPatient', JSON.stringify({
                        token: _token,
                        id: _id,
                        patient_of: _patient_of,
                        encrypted_id: coredbResponse.encrypted_id,
                        encrypted_token: coredbResponse.encrypted_token,
                        encrypted_type: coredbResponse.encrypted_type
                    }));

                    window.localStorage.setItem('dentist', String(_patient_of));

                    this.authenticationServiceService.isPatientLoggedSubject.next(true);
                    this.redirectsService.redirectToLoggedHome();
                    this.additionalService.hideLoader();
                },
                error: error => {
                    document.getElementById('patient-login-failed').classList.remove('hide');
                }
            });
        } else {
            document.getElementById('patient-login-failed-not-a-patient-of-any-dentist').classList.remove('hide');
        }
    }
}
