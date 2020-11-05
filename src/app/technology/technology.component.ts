import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'protractor';
import { BaseComponent } from '../base/base.component';
import { Article } from '../_interfaces/article';
import { Result } from '../_interfaces/result';
import { NewsapiServiceService } from '../_services/newsapi-service.service';


@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent extends BaseComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private newsapiService:NewsapiServiceService,) { 
    super(activatedRoute,newsapiService);
  }

  ngOnInit() {
  }
  

}
