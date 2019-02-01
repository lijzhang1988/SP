import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';

import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppSettings } from './constant';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  username: string;

  

  //http://9.110.88.113/service/
  private base_url:string = 'http://9.110.88.163:8080/'
  //private base_url:string ='http://9.110.88.113/service/'
  getAPIData(massages:any,):any{
    let url = this.base_url + "?" + JSON.stringify(massages);


    

    console.log(JSON.stringify(massages));
    console.log(url);
    

    //let result = this.http.get(url,{headers: headers,observe: 'response',withCredentials:true});
    let result = this.http.get(url,{observe: 'response'});
    return result;
  }
}
