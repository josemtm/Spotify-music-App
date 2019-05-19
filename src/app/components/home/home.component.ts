import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  
  newSong: any[] = [];
  loading: boolean;

  constructor(private spotify:SpotifyService) { 

    
    this.loading=true
    this.spotify.getNewRelease().subscribe((data:any) =>{
      console.log(data);
      this.newSong = data;
      this.loading=false;

    })
  
  
  }



}
