import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../service/github.service';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {

public githubUserQuery : any;
public gitHubProfile :any=[];
  public gitHubRepo!: any[];
  public loginstore : any;
  public urlstore : any;
 
 showHistory = false;
 searchProfile = false;
 fulldata:any;
 fulldataDtl :any=[];
 historylist : History[] =[];


 login:any;
 url:any;

  constructor( private githubService: GithubService) { }





userProfileHistory(){
debugger
  this.searchProfile = false;
  this.showHistory = true;
  
  // this.loginstore = localStorage.getItem('profiledata');
  // this.urlstore = localStorage.getItem('profilelink');
  this.fulldata = localStorage.getItem('fulldata');

  // this.profileName = JSON.parse(this.loginstore);
  // this.profileName = JSON.parse(this.loginstore);
  this.fulldataDtl = JSON.parse(this.fulldata);
 
  // this.historylist = [this.profileName, this.profilelink];


  console.log(this.fulldata);
}

  public searchUser(){
    this.searchProfile = true;
    this.githubService.getProfile(this.githubUserQuery).subscribe((data)=>{
      this.gitHubProfile.push(data);  
      localStorage.setItem("fulldata", JSON.stringify(this.gitHubProfile)); 
      // localStorage.setItem("profiledata", JSON.stringify(data.login)); 
      // localStorage.setItem("profilelink", JSON.stringify(data.html_url)); 
          
    });

    //get git repo 

    this.githubService.getRepos(this.githubUserQuery).subscribe((data)=> {
      this.gitHubRepo = data;
    })


  }

  ngOnInit(): void {
   
  }

}
