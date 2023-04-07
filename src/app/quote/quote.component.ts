import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';
import { quote } from '../quote';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote!:quote;
  constructor(private qs:QuoteService,private app:AppComponent){

  }
  ngOnInit(): void {
    this.app.get=true;
    this.qs.getQuote().subscribe(
      (response)=>{
        this.quote=response;
        console.log(this.quote)
      }
    )
  }

  quoteByChar(){
    this.qs.getQuoteCharacter(this.quote.character).subscribe(
      (response)=>{
        this.quote=response;
        console.log(this.quote)
      }
    )
  }

  quoteByAnime(){
    this.qs.getQuoteAnime(this.quote.anime).subscribe(
      (response)=>{
        this.quote=response;
        console.log(this.quote)
      }
    )
  }

  goToMAL(){
    this.qs.goToMAL(this.quote.anime);
}


}
