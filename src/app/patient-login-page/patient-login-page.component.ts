import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationServiceService} from '../_services/authentication-service.service';
import {RedirectsService} from '../_services/redirects.service';
import {HttpClient, HttpParams} from '../../../node_modules/@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {LanguageService} from '../_services/language.service';
import { environment } from '../../environments/environment';
import {RequestsService} from '../_services/requests.service';
import {AdditionalService} from '../_services/additional.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-patient-login-page',
  templateUrl: './patient-login-page.component.html'
})
export class PatientLoginPageComponent implements OnInit {
    coreDbApiDomain = environment.coreDbApiDomain;
    missingPatientAccount = true;
    patientLoginEventsAdded = false;
    public inviter = '';
    public inviteId = '';

    constructor(public router: Router, public authenticationServiceService: AuthenticationServiceService, public redirectsService: RedirectsService, public http: HttpClient, public translate: TranslateService, public languageService: LanguageService, public requestsService: RequestsService, public additionalService: AdditionalService, public activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        if (this.authenticationServiceService.hasPatientStorageSession()) {
            // redirect to home if logged in
            this.redirectsService.redirectToLoggedHome();
        } else {
            this.inviter = this.activatedRoute.snapshot.queryParamMap.get('invite');
            this.inviteId = this.activatedRoute.snapshot.queryParamMap.get('inviteid');

            if (!this.patientLoginEventsAdded) {
                this.patientLoginEventsAdded = true;

                document.addEventListener('patientAuthSuccessResponse', (e: any) => {
                    console.log(e, 'patientAuthSuccessResponse');
                    this.onPatientsLogin(e.detail.response_data.token, e.detail.response_data.data.id, e.detail.response_data.data.patient_of);
                });

                document.addEventListener('receiveCoredbTokenFromCivicAuth', (e: any) => {
                    console.log(e, 'receiveCoredbTokenFromCivicAuth');

                    this.requestsService.getUserData(e.detail.response_data).subscribe({
                        next: (response: any) => {
                            if (response.success) {
                                this.onPatientsLogin(e.detail.response_data, response.data.id, response.data.patient_of);
                            } else {
                                this.authenticationServiceService.logout('patient');
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
                    document.getElementById('patient-login-failed-missing-email').classList.remove('hide');
                });

                document.addEventListener('patientAuthErrorResponse', (e: any) => {
                    console.log(e, 'e');
                    let errorsHtml = '';
                    if (e.detail.response_data.not_registered) {
                        this.missingPatientAccount = true;
                        document.getElementById('missing-patient-account-error').classList.remove('hide');
                    } else {
                        if (e.detail.response_data.errors) {
                            for (let key in e.detail.response_data.errors) {
                                errorsHtml += e.detail.response_data.errors[key] + '<br>';
                            }
                        }

                        document.getElementById('custom-error').classList.remove('hide');
                        document.getElementById('custom-error').innerHTML = errorsHtml;
                    }

                    if ($('.log-link.open-dentacoin-gateway').length) {
                        $('.log-link.open-dentacoin-gateway').on('click', () => {
                            this.redirectsService.redirectToPatientLogin('login');
                        });
                    }

                    this.additionalService.hideLoader();
                });

                document.addEventListener('noCoreDBApiConnection', (e: any) => {
                    document.getElementById('patient-login-failed').classList.remove('hide');
                    this.additionalService.hideLoader();
                });

                document.addEventListener('noExternalLoginProviderConnection', (e: any) => {
                    document.getElementById('patient-login-failed').classList.remove('hide');
                    this.additionalService.hideLoader();
                });

                window.addEventListener('message', (event: any) => {
                    if (event.data.event_id === 'noUserIdReceived') {
                        document.getElementById('patient-login-failed').classList.remove('hide');
                        document.getElementById('iframe-civic-popup').remove();
                    } else if (event.data.event_id === 'registeredAccountMissingEmail') {
                        document.getElementById('patient-login-failed-missing-email').classList.remove('hide');
                        document.getElementById('iframe-civic-popup').remove();
                    } else if (event.data.event_id === 'patientProceedWithCreatingSession') {
                        this.onPatientsLogin(event.data.data.token, event.data.data.data.id, event.data.data.data.patient_of);
                        document.getElementById('iframe-civic-popup').remove();
                    } else if (event.data.event_id === 'patientAuthErrorResponse') {
                        let errorsHtml = '';
                        if (event.data.data.not_registered) {
                            this.missingPatientAccount = true;
                            document.getElementById('missing-patient-account-error').classList.remove('hide');
                        } else {
                            if (event.data.data.errors) {
                                for (let key in event.data.data.errors) {
                                    errorsHtml += event.data.data.errors[key] + '<br>';
                                }
                            }

                            document.getElementById('custom-error').classList.remove('hide');
                            document.getElementById('custom-error').innerHTML = errorsHtml;
                        }

                        if ($('.log-link.open-dentacoin-gateway').length) {
                            $('.log-link.open-dentacoin-gateway').on('click', () => {
                                this.redirectsService.redirectToPatientLogin('login');
                            });
                        }

                        document.getElementById('iframe-civic-popup').remove();
                    } else if (event.data.event_id === 'noCoreDBApiConnection') {
                        document.getElementById('patient-login-failed').classList.remove('hide');
                        document.getElementById('iframe-civic-popup').remove();
                    } else if (event.data.event_id === 'noExternalLoginProviderConnection') {
                        document.getElementById('patient-login-failed').classList.remove('hide');
                        document.getElementById('iframe-civic-popup').remove();
                    } else if (event.data.event_id === 'removeCivicIframeAndRedirectToAccountPage') {
                        document.getElementById('iframe-civic-popup').remove();
                        window.open(event.data.data.redirect, '_system');
                    }
                });
            }
        }
    }

    // we already have the token, but we are passing the data to dcn hub app backend in order to encrypt it and save it user localstorage
    onPatientsLogin(_token: any, _id: any, _patient_of: any) {
        if (_patient_of !== null && _patient_of !== undefined) {
            this.requestsService.coreDbLogin(new HttpParams().set('token', _token).set('id', _id).set('patient_of', _patient_of).toString()).subscribe({
                next: (coredbResponse: any) => {
                    window.scrollTo(0, 0);
                    if (coredbResponse.success) {
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
                    } else if (coredbResponse.error) {
                        document.getElementById('custom-error').classList.remove('hide');
                        document.getElementById('custom-error').innerHTML = coredbResponse.message;
                        this.additionalService.hideLoader();
                    }
                },
                error: error => {
                    document.getElementById('patient-login-failed').classList.remove('hide');
                    this.additionalService.hideLoader();
                }
            });
        } else {
            document.getElementById('patient-login-failed-not-a-patient-of-any-dentist').classList.remove('hide');
            this.additionalService.hideLoader();
        }
    }
}