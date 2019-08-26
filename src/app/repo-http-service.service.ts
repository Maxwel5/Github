import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repository } from './repository';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepoHttpServiceService {

  repositories:Repository[]=[];

  constructor(private http:HttpClient) { }

  searchGithubs(findUser:string){
    let searchEndpoint= "https://api.github.com/search/users?access_token="+environment.API_KEY;
    searchEndpoint += "&q="+findUser+"+repos:%3E12+followers:%3E10";
    let promise =  new Promise((resolve, reject)=>{
        this.http.get(searchEndpoint).toPromise().then(
          (results)=>{
            this.repositories=[];
            for(let i=0; i<results["items"].length; i++){
              let id = results["items"][i]['id'];
              let repoName = results["items"][i]["name"];
              let link = results["items"][i]["html_url"];
              let dateCreated = results["items"][i]["created_at"];
              let description =  results["items"][i]["description"];
              let repo = new Repository(id,repoName,link,dateCreated,description);
              this.repositories.push(repo);
            }
            console.log(this.repositories);
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

