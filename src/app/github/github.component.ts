import { Component, OnInit } from '@angular/core';
import { GithubHttpServiceService } from '../github-http-service.service';
// import { Github } from '../github';
import { Github } from '../github-navbar/github';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  githubs:Github[];

  constructor(public githubHttpService:GithubHttpServiceService) { }

  ngOnInit() {
    this.searchGithub("Max");
  }

  searchGithub(findUser){
    this.githubHttpService.searchGithubs(findUser).then(
      ()=>{
        this.githubs=this.githubHttpService.githubs;
      },
      (error)=>{
        console.log(error)
      }
    )
    }

}
