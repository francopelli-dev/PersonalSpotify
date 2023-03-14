import { TokenData } from './../../clases/token-data';
import { Injectable, OnInit,  } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService implements OnInit{
  client_id:string = '84c012a0657940b786d7aacee30459cd';
  client_secret:string = '0c7c214dec1c414f935bc680a5dbc0a1';
  redirect_uri:string = 'http://localhost:4200/callback';
  grant_type='client_credentials';
  urlApi = 'https://accounts.spotify.com/api/token';
  body= new URLSearchParams();
  token:Object | undefined;


  constructor(private http:HttpClient) {
    this.body.set('grant_type',this.grant_type)
    this.body.set('client_id',this.client_id)
    this.body.set('client_secret',this.client_secret)

   }
  ngOnInit(): void {
    this.http.post(this.urlApi,this.body).subscribe(data => {
      this.token=data;
      console.log(this.token)
    })
  }

}
