import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../environments/environment';
import {AdditionalService} from './_services/additional.service';
import {RedirectsService} from './_services/redirects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
    hybrid = environment.hybrid;
    dentacoinDomain = environment.dentacoinDomain;
    production = environment.production;

    constructor(public translate: TranslateService, public additionalService: AdditionalService, public redirectsService: RedirectsService) {

    }

    ngOnInit() {
        document.addEventListener('hideLoader', (e: any) => {
            this.additionalService.hideLoader();
        });

        document.addEventListener('showLoader', (e: any) => {
            this.additionalService.showLoader();
        });

        document.addEventListener('redirectToPatientsRegisterByInvite', (e: any) => {
            this.redirectsService.redirectToPatientInvite(e.detail.response_data.invite, e.detail.response_data.inviteId);
        });
    }
}