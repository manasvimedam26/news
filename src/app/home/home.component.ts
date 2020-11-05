import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Article } from '../_interfaces/article';
import { Result } from '../_interfaces/result';
import { NewsapiServiceService } from '../_services/newsapi-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public articles: Article[];  
  constructor(private newsapiService:NewsapiServiceService,) {
  // let from=this.datePipe.transform(new Date().getDate()-1, 'yyyy-MM-dd');
  // let to=this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  let from='2020-10-15';
  let to='2020-10-16';

    var data=newsapiService.getNewsByPopular('sports OR technology OR entertainment',from,to).subscribe((results:Result)=>{
      this.articles=results.articles
    },error=>{
      console.log(error);
    });

   }



  ngOnInit() {
  }

}
