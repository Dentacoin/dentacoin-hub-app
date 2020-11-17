import {Component, OnInit} from '@angular/core';
import {AuthenticationServiceService} from '../_services/authentication-service.service';

@Component({
    selector: 'app-admin-panel',
    templateUrl: './admin.component.html'
})

export class AdminComponent implements OnInit {

    constructor(public authenticationServiceService: AuthenticationServiceService) {
        this.authenticationServiceService.redirectToLoginIfNotLoggedIn();
    }

    ngOnInit() {

    }
}
