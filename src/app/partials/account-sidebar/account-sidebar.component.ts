import {Component, Input, OnInit} from '@angular/core';
import {RedirectsService} from '../../_services/redirects.service';
import {AuthenticationServiceService} from '../../_services/authentication-service.service';
import {RequestsService} from '../../_services/requests.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-account-sidebar',
    templateUrl: './account-sidebar.component.html'
})
export class AccountSidebarComponent implements OnInit {
    public patientData: PatientDataObject = {
        name: ''
    };

    constructor(public redirectsService: RedirectsService, public authenticationServiceService: AuthenticationServiceService, public router: Router, public requestsService: RequestsService) {
    }

    ngOnInit() {
        if (!this.authenticationServiceService.hasPatientStorageSession()) {
            this.redirectsService.redirectToPatientLogin('login');
        } else {
            this.requestsService.getUserData(JSON.parse(window.localStorage.getItem('currentPatient')).token).subscribe({
                next: (response:any) => {
                    this.patientData.name = response.data.name;
                },
                error: error => this.authenticationServiceService.logout('patient')
            });
        }
    }
}

export interface PatientDataObject {
    name: string;
}