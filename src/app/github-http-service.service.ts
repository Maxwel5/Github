import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { Github } from './github-navbar/github';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GithubHttpServiceService {

  githubs:Github[]=[];

  constructor(private http:HttpClient) { }

  searchGithubs(findUser:string){
    let searchEndpoint= "https://api.github.com/search/users?access_token="+environment.API_KEY;
    searchEndpoint += "&q="+findUser+"+repos:%3E12+followers:%3E10";
    let promise =  new Promise((resolve, reject)=>{
        this.http.get(searchEndpoint).toPromise().then(
          (results)=>{
            this.githubs=[];
            for(let i=0; i<results["items"].length; i++){
              let url = results['items'][i]['avatar_url'];
              let name = results['items'][i]['login'];
              let id = results['items'][i]['id'];
              let score = results['items'][i]['score'];
              let user = new Github(id,url,name,score);
              this.githubs.push(user);
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
