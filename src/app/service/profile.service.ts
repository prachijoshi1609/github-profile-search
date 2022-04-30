import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username : string;
  private clienid = 'Iv1.d31776ae6424bf70';
  private clientsecret = 'c7ed21106c8454f28cf1d70119cfa84562da03d1';
  constructor(private http : HttpClient ) {
    console.log("service is ready");
    this.username= 'prachi';
  }

getProfileInfo(){
  return this.http.get("https://api.github.com/users/", this.username)
}

}
