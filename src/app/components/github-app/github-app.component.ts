import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/service/github.service';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {

public githubUserQuery : any;
public gitHubProfile : any;
public gitHubRepo : any ;

  constructor( private githubService: GithubService) { }
  public searchUser(){
    this.githubService.getProfile(this.githubUserQuery).subscribe((data)=>{
      this.gitHubProfile = data;
    });

    //get git repo 

    this.githubService.getRepos(this.githubUserQuery).subscribe((data)=> {
      this.gitHubRepo = data;
    })


  }

  ngOnInit(): void {
  }

}
