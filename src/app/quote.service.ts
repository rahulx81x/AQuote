import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { quote } from './quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http:HttpClient) 
  { }
  url='https://animechan.vercel.app/api/random'

  //http get call for random quote
  getQuote():Observable<quote>{
    return this.http.get<quote>(this.url);
  }

  //http get call for random quote-character input
  getQuoteCharacter(character:string):Observable<quote>{
    return this.http.get<quote>(this.url+'/character?name='+character);
  }

  //http get call for random quote - Anime input
  getQuoteAnime(anime:string):Observable<quote>{
    return this.http.get<quote>(this.url+'/anime?title='+anime);
  }

  goToMAL(anime:string){
    var link='https://myanimelist.net/search/all?q=' + anime +'&cat=all'
    window.open(link, "_blank")
  }





  
}
