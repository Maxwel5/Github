import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { Github } from '../github';
import {HttpClient} from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubHttpServiceService {

  constructor(private http:HttpClient) { }

  searchGithubs(findUser:string){
    let searchEndpoint= "https://api.giphy.com/v1/gifs/search?api_key="+environment.GIPHYAPIKEY;
    searchEndpoint += "&q="+findUser;
    let promise =  new Promise((resolve, reject)=>{
        this.http.get(searchEndpoint).toPromise().then(
          (results)=>{
            this.githubs=[];
            for(let i=0; i<results["data"].length; i++){
              let url = results["data"][i]["images"]["fixed_height"]["url"];
              let giph = new Github(url);
              this.githubs.push(giph);
            }
            console.log(this.githubs);
            resolve()
          },
          (error)=>{
            console.log(error)
            reject()
          }
        )
    })
    return promise;
  }
}
