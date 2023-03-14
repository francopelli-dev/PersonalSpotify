import { TokenData } from './../../clases/token-data';
import { Injectable, OnInit,  } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService implements OnInit{
  client_id:string = '84c012a0657940b786d7aacee30459cd';
  client_secret:string = '0c7c214dec1c414f935bc680a5dbc0a1';
  redirect_uri:string = 'http://localhost:4200/callback';
  grant_type='client_credentials';
  urlApi = 'https://accounts.spotify.com/api/token';
  body = new HttpParams().set('grant_type',this.grant_type).set('client_id',this.client_id).set('client_secret',this.client_secret)
  token:Object | undefined;

 //
  constructor(private http:HttpClient) {

   }
  ngOnInit(): void {

  }
  getToken() {
    this.http.post(this.urlApi,this.body).subscribe(data=> console.log(data));
  }
}
