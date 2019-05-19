import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  artista:any[]=[];
  loading:boolean
 
  constructor(private spotifyService:SpotifyService) { }
  
  buscar(termino){
    this.loading=true;
    
    this.spotifyService.getArtista(termino).subscribe((data:any)=>{
      console.log(data)
      this.artista = data;
      this.loading = false;
    })

  }

  

}
