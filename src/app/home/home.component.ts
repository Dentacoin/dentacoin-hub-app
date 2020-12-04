import { Component, OnInit } from '@angular/core';
import {AuthenticationServiceService} from '../_services/authentication-service.service';
import {RedirectsService} from '../_services/redirects.service';
import {RequestsService} from '../_services/requests.service';
import {TranslateService} from '@ngx-translate/core';
import {HttpHeaders, HttpParams} from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    public applications = [];
    public pageColumnClass: string = 'col-xs-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3';
    public applicationsColumnClass: string = 'col-xs-4';
    public hubTitleEn: string;
    public hubTitleDe: string;

    constructor(public authenticationServiceService: AuthenticationServiceService, public redirectsService: RedirectsService, public requestsService: RequestsService, public translate: TranslateService) {
    }

    ngOnInit() {
        if (!this.authenticationServiceService.hasPatientStorageSession()) {
            console.log('===== 1 =====');
            this.redirectsService.redirectToPatientLogin('login');
        } else {
            console.log('===== 2 =====');
            this.requestsService.getDentistData(JSON.parse(window.localStorage.getItem('currentPatient')).patient_of).subscribe((response: any) => {
                this.requestsService.getDentistTrpLink(new HttpParams().set('id', JSON.parse(window.localStorage.getItem('currentPatient')).patient_of).toString()).subscribe((trpLinkResponse: any) => {
                    console.log(trpLinkResponse, 'trpLinkResponse');

                    this.hubTitleEn = response.data.hub_title_en;
                    this.hubTitleDe = response.data.hub_title_de;
                    this.applications = Object.keys(response.data.applications).map(i => response.data.applications[i]);

                    if (this.applications.length) {
                        for (let i = 0; i < this.applications.length; i += 1) {
                            // setting dynamic dentist trp profile link
                            if (this.applications[i].url.includes('reviews.dentacoin.com') && trpLinkResponse.success) {
                                // setting up dentavox cross login
                                this.applications[i].url = trpLinkResponse.data;
                            }
                        }
                    }

                    if (this.applications.length >= 7) {
                        this.pageColumnClass = 'col-xs-12 col-md-8 col-md-offset-2';
                        this.applicationsColumnClass = 'col-xs-4 col-sm-3';
                    }
                });
            });
        }
    }
}

export interface DentistDataObject {
    hubTitleEn: string;
    hubTitleDe: string;
}