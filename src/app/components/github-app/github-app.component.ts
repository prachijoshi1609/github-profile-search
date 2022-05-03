import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../service/github.service';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {

public githubUserQuery : any;
public gitHubProfile : any;
  public gitHubRepo!: any[];
  public loginstore : any;
  public urlstore : any;
 profileName :any;
 profilelink:any;
 showHistory = false;
 searchProfile = false;

 arrayhistory! : any[];


  constructor( private githubService: GithubService) { }



userProfileHistory(){  
  this.searchProfile = false;
  this.showHistory = true;
  
  this.loginstore = localStorage.getItem('profiledata');
  this.urlstore = localStorage.getItem('profilelink');
  this.profileName = JSON.parse(this.loginstore);
  this.profilelink = JSON.parse(this.urlstore);



  console.log(this.profileName);
  console.log(this.urlstore);
}

  public searchUser(){
    this.searchProfile = true;
    this.githubService.getProfile(this.githubUserQuery).subscribe((data)=>{
      this.gitHubProfile = data;  
      localStorage.setItem("profiledata", JSON.stringify(data.login)); 
      localStorage.setItem("profilelink", JSON.stringify(data.html_url)); 
          
    });

    //get git repo 

    this.githubService.getRepos(this.githubUserQuery).subscribe((data)=> {
      this.gitHubRepo = data;
    })


  }

  ngOnInit(): void {
   
  }

}
