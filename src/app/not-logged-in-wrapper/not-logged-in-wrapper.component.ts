import {Component, OnInit} from '@angular/core';
import {AuthenticationServiceService} from '../_services/authentication-service.service';
import {RequestsService} from '../_services/requests.service';
import {TranslateService} from '@ngx-translate/core';
import {LanguageService} from '../_services/language.service';

@Component({
    selector: 'app-not-logged-in-wrapper',
    templateUrl: './not-logged-in-wrapper.component.html'
})

export class NotLoggedInWrapperComponent implements OnInit {
    dentistLogo = '';
    dentistLogoClass = '';

    constructor(public authenticationServiceService: AuthenticationServiceService, public requestsService: RequestsService, public translate: TranslateService, public languageService: LanguageService) {

    }

    ngOnInit() {
        if (!this.authenticationServiceService.hasPatientStorageSession()) {
            if (localStorage.getItem('currentDentist') != null) {
                this.requestsService.getDentistData(JSON.parse(localStorage.getItem('currentPatient')).patient_of).subscribe((response: any) => {
                    if (response.success) {
                        this.dentistLogo = response.data.logo;
                    }
                });
            } else {
                this.dentistLogo = 'assets/images/one-line-logo-black.svg';
                this.dentistLogoClass = 'max-width-140';
            }
        }
    }
}
