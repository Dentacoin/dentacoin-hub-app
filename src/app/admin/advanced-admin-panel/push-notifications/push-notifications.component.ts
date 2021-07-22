import {Component, OnInit} from '@angular/core';
import {RedirectsService} from '../../../_services/redirects.service';
import {AuthenticationServiceService} from '../../../_services/authentication-service.service';
import {HttpParams} from '../../../../../node_modules/@angular/common/http';
import {RequestsService} from '../../../_services/requests.service';
import {AdditionalService} from '../../../_services/additional.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-push-notifications',
    templateUrl: './push-notifications.component.html'
})
export class PushNotificationsComponent implements OnInit {
    public showPushNotificationsHistory: boolean = false;
    public push_notifications = [];
    public showCurrentDentistPatients: boolean = false;
    public currentDentistPatients: string = '';
    
    constructor(public redirectsService: RedirectsService, public requestsService: RequestsService, public authenticationServiceService: AuthenticationServiceService, public additionalService: AdditionalService, public translate: TranslateService) {
    }

    ngOnInit() {
        if (!this.authenticationServiceService.hasDentistStorageSession()) {
            // redirect to home if logged in
            this.redirectsService.redirectToLoggedHome();
        } else {
            this.requestsService.getPushNotificationsHistory(new HttpParams().set('id', JSON.parse(window.localStorage.getItem('currentDentist')).id).set('token', JSON.parse(window.localStorage.getItem('currentDentist')).token).toString()).subscribe((response: any) => {
                if (response.success) {
                    this.showPushNotificationsHistory = true;
                    this.push_notifications = response.data;

                    if (this.push_notifications.length) {
                        for (let i = 0; i < this.push_notifications.length; i += 1) {
                            if (this.push_notifications[i].scheduled != null) {
                                this.push_notifications[i].date = this.additionalService.dateObjToFormattedDate(new Date(this.push_notifications[i].scheduled));
                            } else {
                                this.push_notifications[i].date = this.additionalService.dateObjToFormattedDate(new Date(this.push_notifications[i].created_at));
                            }
                        }
                    }
                }
            });

            this.requestsService.getPatientsWhichCanReceivePushNotifications(new HttpParams().set('id', JSON.parse(window.localStorage.getItem('currentDentist')).id).set('token', JSON.parse(window.localStorage.getItem('currentDentist')).token).toString()).subscribe((response: any) => {
                if (response.success && response.data.length) {
                    this.currentDentistPatients = JSON.stringify(response.data);
                    this.showCurrentDentistPatients = true;
                }
            });
        }
    }
}