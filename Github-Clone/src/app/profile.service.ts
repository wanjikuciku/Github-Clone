import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { Repository } from './repository';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
user: Users;
repo: Repository;
newRepo: any;
newUser: any;
private userName: string;


private accessToken = '31c02262d8ab36a442e79ac012a049abe96e6f3d';

  constructor(private http: HttpClient) {
  this.user = new Users ('', '', '', '', '','','',new Date);
   this.repo = new Repository('', '', '');
   console.log('Service Works!');
   this.userName = 'wanjikuciku';
  }
  getUserInfo() {

    interface ApiResponse {

      login: string;
      avatar_url: string;
      followers: string;
      following: string;
      public_repos: string;
      name: string;
      email: string;
      created_at: Date;
      html_url: string;

    }
    const promise = new Promise(((resolve, reject) => {
        this.http.get<ApiResponse>('https://api.github.com/users/' + this.userName +
        '?access_token=' + environment.apiUrl)

        .toPromise().then(response => {
          this.user.login = response.login;
          this.user.avatar_url = response.avatar_url;
          this.user.followers_url = response.followers;
          this.user.following_url = response.following;
          this.user.repos_url = response.public_repos;
          this.user.fullname = response.name;
          this.user.mail = response.email;
          this.user.createdAt = response.created_at;
          this.user.repo_url = response.html_url;
          console.log(this.user);

        },
        error => {

        reject(error);
      });
    } ));
    return promise;

  }

  getRepoInfo(username) {

    interface ApiResponse {

      name: string;
      repo_url: string;
      description: string;

    }

    const promise = new Promise(( (resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + this.userName + '/repos?access_token=' + environment.apiUrl)
      .toPromise()
      .then(response_repo => {
        this.newRepo = response_repo;
        // console.log(this.newRepo);

        resolve();
  },
  error => {
    reject(error);
  }
);
}));
return promise;
  }


 updateProfile(userName: string) {
   this.userName = userName;
 }


}
