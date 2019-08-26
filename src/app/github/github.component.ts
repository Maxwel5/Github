import { Component, OnInit } from '@angular/core';
import { GithubHttpServiceService } from '../github-http-service.service';
// import { Github } from '../github';
import { Github } from '../github-navbar/github';
import { RepoHttpServiceService } from '../repo-http-service.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  githubs:Github[];
  repositories:Repository[];

  constructor(public githubHttpService:GithubHttpServiceService,public repoHttpService:RepoHttpServiceService) { }

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
    this.repoHttpService.searchGithubs(findUser).then(
      ()=>{
        this.repositories=this.repoHttpService.repositories;
      },
      (error)=>{
        console.log(error)
      }
    )
    }

}
