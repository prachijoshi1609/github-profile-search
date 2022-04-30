import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { CLIENT_ID, CLIENT_SECRET } from '../credentials/GithubCred';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient : HttpClient) { }
  private dataUrl = 'https://api.github.com/users/';

  //github profile
  public getProfile(searchQuery:any){
 
    // let dataUrl ='https://api.github.com/users';
    
    return this.httpClient.get<any>(this.dataUrl + searchQuery + '?client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET);
  }

  //github repo

  public getRepos(searchQuery :Observable<any[]>){
 
    // let dataUrl ='https://api.github.com/users/'+ {searchQuery} + '/repos' + '?cient_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET;
    
    return this.httpClient.get<any[]>(this.dataUrl + searchQuery + '/repos?client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET);
  }
}
