import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AuthenticationServiceService} from '../_services/authentication-service.service';
import {ActivatedRoute, Params} from '@angular/router';
import {RedirectsService} from '../_services/redirects.service';
import {HttpClient, HttpParams} from '../../../node_modules/@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../../environments/environment';
import {RequestsService} from '../_services/requests.service';
import {AdditionalService} from '../_services/additional.service';
import * as $ from 'jquery';

@Component({
    selector: 'app-patient-register-by-invite',
    templateUrl: './patient-register-by-invite.component.html'
})
export class PatientRegisterByInviteComponent implements OnInit {
    public coreDbApiDomain = environment.coreDbApiDomain;
    public inviter = '';
    public inviteId = '';

    constructor(public authenticationServiceService: AuthenticationServiceService, public redirectsService: RedirectsService, public activatedRoute: ActivatedRoute, public translate: TranslateService, public additionalService: AdditionalService, public requestsService: RequestsService) {
    }

    ngOnInit() {
        if (this.authenticationServiceService.hasPatientStorageSession()) {
            // redirect to home if logged in
            this.redirectsService.redirectToLoggedHome();
        } else {
            if (this.activatedRoute.snapshot.queryParamMap.get('invite') == null || this.activatedRoute.snapshot.queryParamMap.get('inviteid') == null) {
                this.redirectsService.redirectToPatientLogin('login');
            } else {
                this.inviter = this.activatedRoute.snapshot.queryParamMap.get('invite');
                this.inviteId = this.activatedRoute.snapshot.queryParamMap.get('inviteid');

                document.addEventListener('patientAuthSuccessResponse', (e: any) => {
                    console.log(e, 'patientAuthSuccessResponse');
                    this.onPatientsRegister(e.detail.response_data.token, e.detail.response_data.data.id, e.detail.response_data.data.patient_of);
                });

                document.addEventListener('receiveCoredbTokenFromCivicAuth', (e: any) => {
                    this.requestsService.getUserData(e.detail.response_data).subscribe({
                        next: (response: any) => {
                            if (response.success) {
                                this.onPatientsRegister(e.detail.response_data, response.data.id, response.data.patient_of);
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
                    // COVER THIS !!!!!!!!!!!!!
                    document.getElementById('patient-register-failed-missing-email').classList.remove('hide');
                });

                document.addEventListener('patientAuthErrorResponse', (e: any) => {
                    console.log(e, 'e');
                    let errorsHtml = '';
                    if (e.detail.response_data.not_registered) {
                        errorsHtml = this.translate.instant('account-not-found');
                    } else {
                        if (e.detail.response_data.errors) {
                            for (let key in e.detail.response_data.errors) {
                                errorsHtml += e.detail.response_data.errors[key] + '<br>';
                            }
                        }
                    }

                    document.getElementById('custom-error').classList.remove('hide');
                    document.getElementById('custom-error').innerHTML = errorsHtml;

                    if ($('.log-link.open-dentacoin-gateway').length) {
                        $('.log-link.open-dentacoin-gateway').on('click', () => {
                            this.redirectsService.redirectToPatientLogin('login?invite=' + this.inviter + '&inviteid=' + this.inviteId);
                        });
                    }

                    this.additionalService.hideLoader();
                });

                document.addEventListener('noCoreDBApiConnection', (e: any) => {
                    document.getElementById('patient-register-failed').classList.remove('hide');
                    this.additionalService.hideLoader();
                });

                document.addEventListener('noExternalLoginProviderConnection', (e: any) => {
                    document.getElementById('patient-register-failed').classList.remove('hide');
                    this.additionalService.hideLoader();
                });
            }
        }
    }

    onPatientsRegister(_token: any, _id: any, _patient_of: any) {
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
                    document.getElementById('patient-register-failed').classList.remove('hide');
                    this.additionalService.hideLoader();
                }
            });
        } else {
            document.getElementById('patient-register-failed-not-a-patient-of-any-dentist').classList.remove('hide');
            this.additionalService.hideLoader();
        }
    }
}
