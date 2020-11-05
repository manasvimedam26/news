import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../_interfaces/article';
import { Result } from '../_interfaces/result';
import { NewsapiServiceService } from '../_services/newsapi-service.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  public articles: Article[];
  public country: string = null;
  private cc: string = null;
  private category:string=null;
  customLabels = {
    'us': 'United States',
    'in': 'India',
    'de': 'Germany',
    'fr': 'France',
    'br': 'Brazil',
    'pt': 'Portugal'
  };
  constructor(activatedRoute: ActivatedRoute,newsapiService:NewsapiServiceService,) { 
   
    this.cc=activatedRoute.snapshot.paramMap.get('cc');
    this.category=activatedRoute.snapshot.paramMap.get('category');
    console.log(this.category);
    console.log(this.cc);
    activatedRoute.params.subscribe(params => {
     
      //this.cc = params['cc'];
      //this.category = params['category'];
      this.country = this.customLabels[this.cc];
      
      var data=newsapiService.getNews(this.category,this.cc).subscribe((results:Result)=>{
        this.articles=results.articles
      },error=>{
        console.log(error);
      });  
  });
  }

  ngOnInit() {
  }

}
