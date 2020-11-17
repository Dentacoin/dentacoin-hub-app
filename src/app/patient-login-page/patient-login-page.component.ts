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

                console.log(e.detail.response_data.data.patient_of, 'e.detail.response_data.data.patient_of');
                if (e.detail.response_data.data.patient_of !== null && e.detail.response_data.data.patient_of !== undefined) {
                    this.requestsService.coreDbLogin(new HttpParams().set('token', e.detail.response_data.token).set('id', e.detail.response_data.data.id).toString()).subscribe({
                        next: (coredbResponse: any) => {

                            console.log(this.authenticationServiceService.hasPatientStorageSession(), 'this.authenticationServiceService.isPatientLoggedSubject');
                            
                            localStorage.setItem('currentPatient', JSON.stringify({
                                token: e.detail.response_data.token,
                                id: e.detail.response_data.data.id,
                                patient_of: e.detail.response_data.data.patient_of,
                                encrypted_id: coredbResponse.encrypted_id,
                                encrypted_token: coredbResponse.encrypted_token,
                                encrypted_type: coredbResponse.encrypted_type
                            }));

                            localStorage.setItem('dentist', String(e.detail.response_data.data.patient_of));

                            console.log(this.authenticationServiceService.hasPatientStorageSession(), 'this.authenticationServiceService.isPatientLoggedSubject');
                            this.authenticationServiceService.isPatientLoggedSubject.next(true);
                            console.log(this.authenticationServiceService.hasPatientStorageSession(), 'this.authenticationServiceService.isPatientLoggedSubject');
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
            });

            document.addEventListener('registeredAccountMissingEmail', (e) => {
                document.getElementById('patient-login-failed-missing-email').classList.remove('hide');
            });

            document.addEventListener('patientAuthErrorResponse', (e) => {
                document.getElementById('patient-login-failed').classList.remove('hide');
            });

            document.addEventListener('noCoreDBApiConnection', (e) => {
                document.getElementById('patient-login-failed').classList.remove('hide');
            });

            document.addEventListener('noExternalLoginProviderConnection', (e) => {
                document.getElementById('patient-login-failed').classList.remove('hide');
            });
        }
    }
}
