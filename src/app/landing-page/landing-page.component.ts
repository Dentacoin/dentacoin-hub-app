import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LanguageService} from '../_services/language.service';
import {AuthenticationServiceService} from '../_services/authentication-service.service';
import {DentistDataObject} from '../admin/advanced-admin-panel/advanced-admin-panel.component';
import {AdditionalService} from '../_services/additional.service';
import {RequestsService} from '../_services/requests.service';
import {HttpClient} from '../../../node_modules/@angular/common/http';
import {RedirectsService} from '../_services/redirects.service';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html'
})
export class LandingPageComponent implements OnInit {
    public year = new Date().getFullYear();
    public isNotAPartnerDentistLoggedIn: boolean;
    public myAccountLink: string;
    public dcnAmount: number = 0;
    public usdAmount: number = 0;
    public updateDentistDcnAndUsdBalanceTimer: any;
    public dentistData: DentistDataObject = {
        name: '',
        email: '',
        avatar_url: ''
    };

    constructor(public authenticationServiceService: AuthenticationServiceService, public translate: TranslateService, public languageService: LanguageService, public additionalService: AdditionalService, public requestsService: RequestsService, private redirectsService: RedirectsService) {
        this.isNotAPartnerDentistLoggedIn = authenticationServiceService.hasNotAPartnerDentistStorageSession();
    }

    ngOnInit() {
        this.myAccountLink = this.additionalService.generateNotAPartnerDentistAccountLink();

        this.requestsService.getUserData(JSON.parse(window.localStorage.getItem('currentNotAPartnerDentist')).token).subscribe({
            next: (response: any) => {
                this.dentistData.name = response.data.name;
                this.dentistData.email = response.data.email;
                this.dentistData.avatar_url = response.data.avatar_url;

                if (response.data.is_partner == true || response.data.is_hub_app_dentist == true) {
                    this.redirectsService.redirectToAdmin();
                }
            },
            error: error => this.authenticationServiceService.logout('dentist')
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
        this.requestsService.getDCNBalance(JSON.parse(window.localStorage.getItem('currentNotAPartnerDentist')).token).subscribe({
            next: (response: any) => {
                if (response.success) {
                    this.dcnAmount = response.data;

                    this.requestsService.getDentacoinDataByExternalProvider('USD').subscribe((coingeckoResponse: any) => {
                        this.usdAmount = Number(((1 / Number(Number(coingeckoResponse) / 100)) * this.dcnAmount).toFixed(2));
                    });
                }
            },
            error: error => this.authenticationServiceService.logout('dentist')
        });
    }

}
