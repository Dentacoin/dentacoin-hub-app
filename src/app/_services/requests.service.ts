import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class RequestsService {

    constructor(private http: HttpClient) {
    }

    public getDentacoinDataByExternalProvider(currency: string): Observable<{}> {
        return this.http.get('https://indacoin.com/api/GetCoinConvertAmount/' + currency + '/DCN/100/dentacoin');
    }

    // ===================================== HubApp api methods =====================================

    public getDentistData(id: any): Observable<{}> {
        return this.http.get('https://dcn-hub-app-api.dentacoin.com/dentist/get-dentist-data/' + id);
    }

    public sendRequestAccountMail(body): Observable<{}> {
        return this.http.post('https://dcn-hub-app-api.dentacoin.com/patient/send-request-account-mail', body, {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        });
    }

    public dentistSendRequestAccountMail(body): Observable<{}> {
        return this.http.post('https://dcn-hub-app-api.dentacoin.com/dentist/dentist-send-request-account-mail', body, {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        });
    }

    public withdraw(body: string): Observable<{}> {
        return this.http.post('https://dcn-hub-app-api.dentacoin.com/patient/withdraw', body, {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            })
        });
    }

    public dentistLogin(body: string): Observable<{}> {
        return this.http.post('https://dcn-hub-app-api.dentacoin.com/dentist/coredb-login', body, {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            })
        });
    }

    public getDentistTrpLink(body: string): Observable<{}> {
        return this.http.post('https://dcn-hub-app-api.dentacoin.com/patient/get-dentist-trp-profile', body, {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            })
        });
    }

    public coreDbLogin(body: string): Observable<{}> {
        return this.http.post('https://dcn-hub-app-api.dentacoin.com/patient/coredb-login', body, {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            })
        });
    }

    public getWithdrawHistory(body: string): Observable<{}> {
        return this.http.post('https://dcn-hub-app-api.dentacoin.com/patient/get-dcn-withdraw-history', body, {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        });
    }

    public requestForgottenPasswordToken(body: string): Observable<{}> {
        return this.http.post('https://dcn-hub-app-api.dentacoin.com/patient/request-forgotten-password', body, {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        });
    }

    // ===================================== CoreDB api methods =====================================
    public getTitles(): Observable<{}> {
        return this.http.get(environment.coreDbApiDomain + '/api/enums');
    }

    public getCountries(): Observable<{}> {
        return this.http.get(environment.coreDbApiDomain + '/api/countries');
    }

    public downloadGDPRData(token: string): Observable<{}> {
        return this.http.post(environment.coreDbApiDomain + '/api/gdpr/', null, {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            })
        });
    }

    public deleteProfile(body: string, token: string): Observable<{}> {
        return this.http.post(environment.coreDbApiDomain + '/api/user/', body, {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            })
        });
    }

    public editProfile(body: string, token: string): Observable<{}> {
        return this.http.post(environment.coreDbApiDomain + '/api/user/', body, {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            })
        });
    }

    public getUserData(token: string): Observable<{}> {
        return this.http.get(environment.coreDbApiDomain + '/api/user/', {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            })
        });
    }

    public getDCNBalance(token: string): Observable<{}> {
        return this.http.post(environment.coreDbApiDomain + '/api/balance', null, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            })
        });
    }

    public getAddresses(id: any): Observable<{}> {
        return this.http.get(environment.coreDbApiDomain + '/api/wallet-addresses/' + id);
    }
}
