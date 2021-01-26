import {Component, OnInit} from '@angular/core';
import {AuthenticationServiceService} from '../_services/authentication-service.service';
import {RedirectsService} from '../_services/redirects.service';
import {RequestsService} from '../_services/requests.service';
import {LanguageService} from '../_services/language.service';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-logged-in-wrapper',
    templateUrl: './logged-in-wrapper.component.html'
})
export class LoggedInWrapperComponent implements OnInit {
    public dentistData: DentistDataObject = {
        logo: ''
    };
    public patientData: PatientDataObject = {
        name: ''
    };
    /*public applications = [];
    public showApplications: boolean = false;*/
    public dcnAmount: number = 0;
    public usdAmount: number = 0;
    public updatePatientDcnAndUsdBalanceTimer: any;
    public myAccountLink: string;

    constructor(public authenticationServiceService: AuthenticationServiceService, public redirectsService: RedirectsService, public requestsService: RequestsService, public languageService: LanguageService, public translate: TranslateService, public router: Router) {}

    ngOnInit() {
        if (!this.authenticationServiceService.hasPatientStorageSession()) {
            this.redirectsService.redirectToPatientLogin('login');
        } else {
            if (environment.hybrid === true) {
                this.myAccountLink = environment.accountDomain + '/custom-cookie?mobile-app=hubapp&slug=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentPatient')).encrypted_id) + '&type=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentPatient')).encrypted_type) + '&token=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentPatient')).encrypted_token);
            } else {
                this.myAccountLink = environment.accountDomain + '/custom-cookie?slug=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentPatient')).encrypted_id) + '&type=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentPatient')).encrypted_type) + '&token=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentPatient')).encrypted_token);
            }

            this.requestsService.getDentistData(JSON.parse(window.localStorage.getItem('currentPatient')).patient_of).subscribe((response: any) => {
                this.dentistData.logo = response.data.logo;
            });

            this.requestsService.getUserData(JSON.parse(window.localStorage.getItem('currentPatient')).token).subscribe({
                next: (response:any) => {
                    this.patientData.name = response.data.name;
                },
                error: error => this.authenticationServiceService.logout('patient')
            });

            this.updatePatientDcnAndUsdBalance();

            if (typeof(this.updatePatientDcnAndUsdBalanceTimer) !== 'undefined') {
                clearInterval(this.updatePatientDcnAndUsdBalanceTimer);
                this.updatePatientDcnAndUsdBalanceTimer = undefined;
            }

            this.updatePatientDcnAndUsdBalanceTimer = setInterval(() => {
                if (!this.authenticationServiceService.hasPatientStorageSession()) {
                    clearInterval(this.updatePatientDcnAndUsdBalanceTimer);
                    this.updatePatientDcnAndUsdBalanceTimer = undefined;
                } else {
                    this.updatePatientDcnAndUsdBalance();
                }
            }, 5000);
        }
    }

    updatePatientDcnAndUsdBalance() {
        this.requestsService.getDCNBalance(JSON.parse(window.localStorage.getItem('currentPatient')).token).subscribe({
            next: (response:any) => {
                if (response.success) {
                    this.dcnAmount = response.data;

                    this.requestsService.getDentacoinDataByExternalProvider('USD').subscribe((coingeckoResponse: any) => {
                        this.usdAmount = Number(((1 / Number(Number(coingeckoResponse) / 100)) * this.dcnAmount).toFixed(2));
                    });
                }
            },
            error: error => this.authenticationServiceService.logout('patient')
        });
    }

    isAccountPage() {
        if (this.router.url.indexOf('my-wallet') !== -1 || this.router.url.indexOf('edit-account') !== -1 || this.router.url.indexOf('manage-privacy') !== -1) {
            return true;
        } else {
            return false;
        }
    }
}

export interface DentistDataObject {
    logo: string;
}

export interface PatientDataObject {
    name: string;
}