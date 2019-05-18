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
      "Authorization" : "Bearer BQCtk4bEI0IfL18KxN27BUff8I_60LtF2r5LPYR_qkzyMkyVRmNqDpQfU8gqQBlSoH6tOiTSLuAAsr4GDQ8"
    });

    return this.http.get("https://api.spotify.com/v1/browse/new-releases",{headers})
            .pipe(map((data:any) =>{
             return data.albums.items;
            }))
  }
  //para la pagina de search
  getArtista(termino:string){
    const headers = new HttpHeaders({
      "Authorization" : "Bearer BQCtk4bEI0IfL18KxN27BUff8I_60LtF2r5LPYR_qkzyMkyVRmNqDpQfU8gqQBlSoH6tOiTSLuAAsr4GDQ8"
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers})
            .pipe(map(data=>data["artists"].items));   

  }
}
