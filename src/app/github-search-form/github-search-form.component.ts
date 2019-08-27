import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-github-search-form',
  templateUrl: './github-search-form.component.html',
  styleUrls: ['./github-search-form.component.css']
})
export class GithubSearchFormComponent implements OnInit {
  @Output() emitSearch = new EventEmitter<any>()

  findUser:string;
  constructor() { }

  search(){
    console.log(this.findUser)
    this.emitSearch.emit(this.findUser);
  }

  ngOnInit() {
  }

}
