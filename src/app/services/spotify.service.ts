import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//map para simplicar el codigo de apis
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log("cliente listo")
  }
  //para las tarjetas
  getNewRelease(){
    const headers = new HttpHeaders({
      "Authorization" : "Bearer BQA-vs6Qo33nPZxfAkN6UtVEIyIRV4U-BJAarSO4hHMW4RnAwWbZSZDtACbbG4TbsXCGilIWdSxFBBNxQtM"
    });

    return this.http.get("https://api.spotify.com/v1/browse/new-releases",{headers})
            .pipe(map((data:any) =>{
             return data.albums.items;
            }))
  }
  //para la pagina de search
  getArtistas(termino:string){
    const headers = new HttpHeaders({
      "Authorization" : "Bearer BQA-vs6Qo33nPZxfAkN6UtVEIyIRV4U-BJAarSO4hHMW4RnAwWbZSZDtACbbG4TbsXCGilIWdSxFBBNxQtM"
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers})
            .pipe(map(data=>data["artists"].items));   

  }

  // para la pagina de artista 

  getArtista(id:string){
    const headers = new HttpHeaders({
      "Authorization" : "Bearer BQA-vs6Qo33nPZxfAkN6UtVEIyIRV4U-BJAarSO4hHMW4RnAwWbZSZDtACbbG4TbsXCGilIWdSxFBBNxQtM"
    });

    return this.http.get(`https://api.spotify.com/v1/artists/${id}`,{headers})
              
            
  }
}
