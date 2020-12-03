import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthenticationServiceService} from '../../_services/authentication-service.service';
import {RedirectsService} from '../../_services/redirects.service';
import {RequestsService} from '../../_services/requests.service';
import {LanguageService} from '../../_services/language.service';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-advanced-admin-panel',
    templateUrl: './advanced-admin-panel.component.html'
})

export class AdvancedAdminPanelComponent implements OnInit {
    public isDentistLoggedIn: Observable<boolean>;
    public myAccountLink: string = environment.accountDomain /*+ '/custom-cookie?mobile-app=hubapp&slug=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentPatient')).encrypted_id) + '&type=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentPatient')).encrypted_type) + '&token=' + encodeURIComponent(JSON.parse(window.localStorage.getItem('currentPatient')).encrypted_token)*/;
    public dcnAmount: number = 0;
    public usdAmount: number = 0;
    public updateDentistDcnAndUsdBalanceTimer: any;
    public dentistData: DentistDataObject = {
        name: '',
        email: '',
        avatar_url: ''
    };

    constructor(public authenticationServiceService: AuthenticationServiceService, public redirectsService: RedirectsService, public requestsService: RequestsService, public languageService: LanguageService, public translate: TranslateService) {
        this.isDentistLoggedIn = authenticationServiceService.isDentistLoggedSubject;
    }

    ngOnInit() {
        this.requestsService.getUserData(JSON.parse(window.localStorage.getItem('currentDentist')).token).subscribe({
            next: (response: any) => {
                console.log(response.data, 'response.data');
                this.dentistData.name = response.data.name;
                this.dentistData.email = response.data.email;
                this.dentistData.avatar_url = response.data.avatar_url;

                console.log(this.dentistData, 'this.dentistData');
            },
            error: error => this.authenticationServiceService.logout('patient')
        });

        this.updateDentistDcnAndUsdBalance();

        if (typeof(this.updateDentistDcnAndUsdBalanceTimer) !== 'undefined') {
            clearInterval(this.updateDentistDcnAndUsdBalanceTimer);
            this.updateDentistDcnAndUsdBalanceTimer = undefined;
        }

        this.updateDentistDcnAndUsdBalanceTimer = setInterval(() => {
            if (!this.authenticationServiceService.hasPatientStorageSession()) {
                clearInterval(this.updateDentistDcnAndUsdBalanceTimer);
                this.updateDentistDcnAndUsdBalanceTimer = undefined;
            } else {
                this.updateDentistDcnAndUsdBalance();
            }
        }, 5000);
    }

    updateDentistDcnAndUsdBalance() {
        this.requestsService.getDCNBalance(JSON.parse(window.localStorage.getItem('currentDentist')).token).subscribe({
            next: (response: any) => {
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
}

export interface DentistDataObject {
    name: string;
    email: string;
    avatar_url: string;
}