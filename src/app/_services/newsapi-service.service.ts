import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiServiceService {

constructor(private http:HttpClient) { }
getNews<T>(category:any,countryCode:any):Observable<T>{
  let enpointUrl="https://newsapi.org/V2/top-headlines?country="+countryCode+"&category="+category+"&pageSize=100";
  console.log(enpointUrl);
  return this.http.get<T>(enpointUrl,this.requestHeaders()).pipe<T>(
    catchError(error=>{
      return this.handleError(error,()=>this.getNews(category,countryCode))
    })
  );  
}

getNewsByPopular<T>(question:string,from:string,to:string):Observable<T>{
  let enpointUrl="https://newsapi.org/V2/everything?q="+question+"&from="+from+"&to="+to+"&sortBy=popularity&pageSize=9";
  console.log(enpointUrl);
  return this.http.get<T>(enpointUrl,this.requestHeaders()).pipe<T>(
    catchError(error=>{
      return this.handleError(error,()=>this.getNewsByPopular(question,from,to))
    })
  );  
}

protected requestHeaders():{headers:HttpHeaders | {[header:string]:string | string[];}}{
  let headers=new HttpHeaders({
    'Authorization': 'Bearer '+"78b9d599c4f94f8fa3afb1a5458928d6",
    'Content-Type':'application/json'
  });
  return { headers};
}

protected handleError(error,continuation:()=>Observable<any>){
  return throwError(error.error && error.error_description?
    'Error getting data ($(error.error.error_deacription})':'Error getting data'
    );
}

}
