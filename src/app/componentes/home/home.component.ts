import { SpotifyService } from './../../services/spotifyConnection/spotify-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   list:number[] = [1,2,3,4,5]

   constructor(private service:SpotifyService){

   }
   getToken(){
    this.service.getToken();
   }
}
