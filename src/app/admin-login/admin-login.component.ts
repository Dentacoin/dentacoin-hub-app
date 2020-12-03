import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationServiceService} from '../_services/authentication-service.service';
import {RedirectsService} from '../_services/redirects.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html'
})
export class AdminLoginComponent implements OnInit {
    public isDentistLoggedIn: Observable<boolean>;

    constructor(public router: Router, public formBuilder: FormBuilder, public authenticationServiceService: AuthenticationServiceService, public redirectsService: RedirectsService, private translate: TranslateService) {
        this.isDentistLoggedIn = authenticationServiceService.isDentistLoggedSubject;
    }

    dentistsLoginForm: FormGroup;
    dentistsFormSubmitted = false;

    ngOnInit() {
        if (this.authenticationServiceService.hasDentistStorageSession()) {
            // logged-in logic
            this.redirectsService.redirectToAdmin();
        } else {
            // not logged-in logic
            this.dentistsLoginForm = this.formBuilder.group({
                email: new FormControl('', Validators.compose([
                    Validators.required,
                    Validators.email
                ])),
                password: ['', Validators.required]
            });
        }
    }

    // convenience getter for easy access to form fields
    get dentists_form_data() {
        return this.dentistsLoginForm.controls;
    }

    // dentist trying to log in
    onDentistsFormSubmit() {
        this.dentistsFormSubmitted = true;
        // stop here if form is invalid
        if (this.dentistsLoginForm.invalid) {
            return;
        }

        this.authenticationServiceService.dentistLogin(this.dentists_form_data.email.value.trim(), this.dentists_form_data.password.value.trim());
    }
}
