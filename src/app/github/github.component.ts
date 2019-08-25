import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../services/http-service.service';
import { Githubs } from '../githubs';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  githubs:Github[];

  constructor(public githubHttpService:GiphyHttpServiceService) { }

  ngOnInit() {
    this.searchGithub("github user");
  }

  searchGithub(searchTerm){
    this.githubHttpService.searchGiphies(searchTerm).then(
      ()=>{
        this.githubs=this.githubHttpService.githubs;
      },
      (error)=>{
        console.log(error)
      }
    )
    }

}
