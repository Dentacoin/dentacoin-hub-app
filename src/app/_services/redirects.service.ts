import {Injectable, NgZone} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class RedirectsService {
    constructor(private router: Router, private translate: TranslateService, private ngZone: NgZone) {
    }

    redirectToAdminLogin() {
        this.ngZone.run(() => this.router.navigateByUrl(this.translate.currentLang + '/admin-login')).then();
    }

    redirectToAdmin() {
        this.ngZone.run(() => this.router.navigateByUrl(this.translate.currentLang + '/admin')).then();
    }

    redirectToAdvancedAdmin() {
        this.ngZone.run(() => this.router.navigateByUrl(this.translate.currentLang + '/admin/advanced')).then();
    }

    redirectToMyPatients() {
        this.ngZone.run(() => this.router.navigateByUrl(this.translate.currentLang + '/admin/advanced/my-patients')).then();
    }

    redirectToLoggedHome() {
        this.ngZone.run(() => this.router.navigateByUrl(this.translate.currentLang)).then();
    }

    redirectToDentistRequestAccount() {
        this.ngZone.run(() => this.router.navigateByUrl(this.translate.currentLang + '/dentist-request-account')).then();
    }

    redirectToPatientRequestAccount() {
        this.ngZone.run(() => this.router.navigateByUrl(this.translate.currentLang + '/request-account')).then();
    }

    redirectToPatientLogin(type: string) {
        if (type === 'account-verification') {
            this.router.navigate([this.translate.currentLang + '/login'], {state: {successfullyVerifiedAccount: true}});
        } else if (type === 'change-password') {
            this.router.navigate([this.translate.currentLang + '/login'], {state: {successfullyChangePassword: true}});
        } else if (type === 'login') {
            this.router.navigateByUrl(this.translate.currentLang + '/login');
        } else {
            this.router.navigateByUrl(this.translate.currentLang + '/' + type);
        }
    }

    redirectToMyWallet() {
        this.router.navigateByUrl(this.translate.currentLang + '/my-wallet');
    }

    redirectToEditAccount() {
        this.router.navigateByUrl(this.translate.currentLang + '/edit-account');
    }

    redirectToManagePrivacy() {
        this.router.navigateByUrl(this.translate.currentLang + '/manage-privacy');
    }
}
