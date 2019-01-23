import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Users } from '../users';
import { Repo } from '../repo';
// import { getResponseURL } from '@angular/http/src/http_utils';
import { FormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ProfileService ],
})
export class SearchComponent implements OnInit {
  user: Users;
  repos: Repo;
  userRepos: any;
  currentUser: string;

  constructor(private profileService: ProfileService) {
  }
 searchUser() {

   this.profileService.updateSearch(this.currentUser);

   this.profileService.getUserInfo();
   this.user = this.profileService.user;
  // console.log(this.user);

   this.profileService.getRepoInfo(this.currentUser);
   this.userRepos = this.profileService.newRepo;
 }

  ngOnInit() {

    this.profileService.getRepoInfo(this.currentUser);
    this.repos = this.profileService.repo;
    this.profileService.getUserInfo();
    this.user = this.profileService.user;
    // console.log(this.profileService.repo.name);
  }

}
