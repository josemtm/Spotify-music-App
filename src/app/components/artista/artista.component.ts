import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';



@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})

export class ArtistaComponent  {

  loadingArtista:boolean;

  artista:any= {};

  constructor( private router: ActivatedRoute, private spotify:SpotifyService ) { 

    this.loadingArtista=true;
    

      this.router.params.subscribe(params =>{
        this.getArtista(params["id"]);
      });

  }

  getArtista(id:string){

    this.loadingArtista=true;
    
    this.spotify.getArtista(id).subscribe(artista =>{
      
      console.log(artista)
      this.artista=artista
      this.loadingArtista=false
    })
  }

  



}
