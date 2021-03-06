import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {RedirectsService} from './redirects.service';
import { environment } from '../../environments/environment';
import {FormBuilder} from '@angular/forms';
import {RequestsService} from './requests.service';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationServiceService {
    isDentistLoggedSubject = new BehaviorSubject<boolean>(this.hasDentistStorageSession());
    isPatientLoggedSubject = new BehaviorSubject<boolean>(this.hasPatientStorageSession());
    generalError: boolean = false;
    dentistAuthFailed: boolean = false;
    notAPartner: boolean = false;

    constructor(private router: Router, private http: HttpClient, private redirectsService: RedirectsService, public requestsService: RequestsService) {
    }

    dentistLogin(email: string, password: string) {
        this.notAPartner = false;
        this.dentistAuthFailed = false;
        this.generalError = false;

        const ParseHeaders = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };

        const body = new HttpParams().set('email', email).set('password', password).set('platform', 'dentacoin').set('type', 'dentist');
        this.requestsService.dentistLogin(body.toString()).subscribe((response: any) => {
            if (response.success) {
                if (response.data.is_partner == true) {
                    console.log('partner');

                    window.scrollTo(0, 0);
                    window.localStorage.setItem('currentDentist', JSON.stringify({
                        id: response.data.id,
                        token: response.token,
                        encrypted_id: response.encrypted_data.encrypted_id,
                        encrypted_token: response.encrypted_data.encrypted_token,
                        encrypted_type: response.encrypted_data.encrypted_type
                    }));

                    this.isDentistLoggedSubject.next(true);
                    this.redirectsService.redirectToAdmin();
                } else {
                    console.log('not partner');
                    this.notAPartner = true;
                }
            } else {
                this.dentistAuthFailed = true;
            }
        });

        /*this.http.post(environment.coreDbApiDomain + '/api/login', body.toString(), ParseHeaders).subscribe({
            next: (response: any) => {
                console.log(response, 'dentistLogin');
                if (response.success) {
                    if (response.data.is_partner == true) {
                        console.log('partner');

                        window.scrollTo(0, 0);
                        window.localStorage.setItem('currentDentist', JSON.stringify({
                            id: response.data.id,
                            token: response.token
                            /!*encrypted_id: coredbResponse.encrypted_id,
                            encrypted_token: coredbResponse.encrypted_token,
                            encrypted_type: coredbResponse.encrypted_type*!/
                        }));

                        this.isDentistLoggedSubject.next(true);
                        this.redirectsService.redirectToAdmin();
                    } else {
                        console.log('not partner');
                        this.notAPartner = true;
                    }
                } else {
                    this.dentistAuthFailed = true;
                }
            },
            error: error => {
                this.generalError = true;
            }
        });*/
    }

    logout(redirect: string) {
        window.localStorage.clear();
        this.isPatientLoggedSubject.next(false);
        this.isDentistLoggedSubject.next(false);

        if (redirect === 'dentist') {
            this.redirectsService.redirectToAdminLogin();
        } else if (redirect === 'patient') {
            this.redirectsService.redirectToPatientLogin('login');
        }
    }

    hasDentistStorageSession(): boolean {
        return !!window.localStorage.getItem('currentDentist');
    }

    hasPatientStorageSession(): boolean {
        return !!window.localStorage.getItem('currentPatient');
    }

    isDentistLoggedIn() : Observable<boolean> {
        return this.isDentistLoggedSubject.asObservable();
    }

    isPatientLoggedIn() : Observable<boolean> {
        return this.isPatientLoggedSubject.asObservable();
    }

    redirectToLoginIfNotLoggedIn() {
        if (!this.hasDentistStorageSession()) {
            this.redirectsService.redirectToAdminLogin();
        }
    }
}
