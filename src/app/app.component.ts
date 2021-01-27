import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { environment } from '../environments/environment';
import * as $ from 'jquery';
import {AuthenticationServiceService} from './_services/authentication-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
    hybrid = environment.hybrid;
    dentacoinDomain = environment.dentacoinDomain;
    production = environment.production;

    constructor(public translate: TranslateService, public authenticationServiceService: AuthenticationServiceService) {

    }

    ngOnInit() {
        document.addEventListener('shouldLogoutPatient', () => {
            this.authenticationServiceService.logout('patient');
        });
    }
}