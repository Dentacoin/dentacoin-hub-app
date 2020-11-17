import { Component, OnInit } from '@angular/core';
import {AuthenticationServiceService} from '../_services/authentication-service.service';
import {RedirectsService} from '../_services/redirects.service';
import {RequestsService} from '../_services/requests.service';
import { environment } from '../../environments/environment';
import {HttpParams} from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-manage-privacy',
  templateUrl: './manage-privacy.component.html'
})
export class ManagePrivacyComponent implements OnInit {
    accountDataDownloadingFailed: boolean = false;
    accountDeletionFailed: boolean = false;
    downloadingGDPRDataFailed: boolean = false;

    constructor(public authenticationServiceService: AuthenticationServiceService, public redirectsService: RedirectsService, public requestsService: RequestsService) {
    }

    ngOnInit() {
        if (!this.authenticationServiceService.hasPatientStorageSession()) {
            this.redirectsService.redirectToPatientLogin('login');
        }
    }

    deleteAccountMethod() {
        const deleteAccount = confirm('Warning! Are you sure you want to delete your account? Deleting your account is permanent action.');
        if (deleteAccount === true) {
            this.requestsService.deleteProfile(new HttpParams().set('self_deleted', 'true').toString(), JSON.parse(window.localStorage.getItem('currentPatient')).token).subscribe({
                next: (response:any) => {
                    if (response.success && response.data) {
                        this.authenticationServiceService.logout('patient');
                    } else {
                        this.accountDeletionFailed = true;
                    }
                },
                error: error => this.authenticationServiceService.logout('patient')
            });
        }
    }

    downloadGDPRDataMethod() {
        console.log('downloadGDPRDataMethod');
        this.requestsService.downloadGDPRData(JSON.parse(window.localStorage.getItem('currentPatient')).token).subscribe({
            next: (response:any) => {
                if (response.success && response.data) {
                    window.open(response.data, '_system');
                    return false;
                } else {
                    this.downloadingGDPRDataFailed = true;
                }
            },
            error: error => this.authenticationServiceService.logout('patient')
        });
    }
}
