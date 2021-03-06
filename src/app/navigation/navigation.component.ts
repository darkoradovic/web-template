import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { RouterLinkActive } from '@angular/router'
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  activetab: string;
  isloggedin: boolean;

  constructor(private location: Location , private auth: AuthenticationService) { }

  ngOnInit() {
    this.activetab = this.location.path();
    console.log('from $(this.activetab)');
  }

  getActiveTab(tabname: string){
    this.activetab = tabname;
    console.log(tabname);
  }

  logout() {
    this.auth.logout();
  }

}
