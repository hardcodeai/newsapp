import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class RequestService {

    constructor (
        private _http: Http
    ) {}

    getHeadLines (sources, params) {
        let headers = new Headers({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        });
        return this._http.get('http://localhost:3000/headlines?sources=' + sources.join(',') + '&q=' + params, { headers })
            .toPromise();
    }

    getAnalysis(param){
        let headers = new Headers({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        });
        return this._http.get('http://localhost:3000/analysis?q' + param, { headers })
            .toPromise();
    }
}