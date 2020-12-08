import {Component, OnInit} from '@angular/core';
import {HttpParams} from '../../../../../node_modules/@angular/common/http';
import {RedirectsService} from '../../../_services/redirects.service';
import {RequestsService} from '../../../_services/requests.service';
import {AuthenticationServiceService} from '../../../_services/authentication-service.service';
import {AdditionalService} from '../../../_services/additional.service';

@Component({
    selector: 'app-my-patients',
    templateUrl: './my-patients.component.html'
})
export class MyPatientsComponent implements OnInit {
    showInvitationHistory: boolean = false;
    public invites = [];

    constructor(public redirectsService: RedirectsService, public requestsService: RequestsService, public authenticationServiceService: AuthenticationServiceService, public additionalService: AdditionalService) {
    }

    ngOnInit() {
        if (!this.authenticationServiceService.hasDentistStorageSession()) {
            this.redirectsService.redirectToPatientLogin('login');
        } else {
            this.requestsService.getInviteHistory(new HttpParams().set('token', JSON.parse(window.localStorage.getItem('currentDentist')).token).toString()).subscribe((response: any) => {
                if (response.success) {
                    this.showInvitationHistory = true;
                    this.invites = response.data;

                    if (this.invites.length) {
                        for (let i = 0; i < this.invites.length; i += 1) {
                            this.invites[i].created_at = this.additionalService.dateObjToFormattedDate(new Date(this.invites[i].created_at));
                        }
                    }
                }
            });
        }
    }
}
