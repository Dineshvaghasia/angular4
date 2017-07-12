import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('http://111.93.82.91:3000/vehicle/list-all/', this.jwt()).map((response: Response) => response.json());
    }

    

    create(user: User) {
        return this.http.post('http://111.93.82.91:3000/auth/signup/', user, this.jwt()).map((response: Response) => response.json());
    }

    

    

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}