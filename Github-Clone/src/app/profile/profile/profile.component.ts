import { Component, OnInit } from '@angular/core';
import { UserService } from './../profile.service';
import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../users';
import { Repo } from '../repo';
import { getResponseURL } from '@angular/http/src/http_utils';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService) { }
  findProfile() {

   this.userService.updateProfile(this.userName);

   this.userService.getUserInfo();
   this.user = this.userService.user;
  console.log(this.user);

   this.userService.getRepoInfo(this.userName);
   this.userRepos = this.userService.newRepo;
 }

  ngOnInit() {
  this.userService.getRepoInfo(this.userName);
    this.repos = this.userService.repo;
    this.userService.getUserInfo();
    this.user = this.userService.user;
  }

}
