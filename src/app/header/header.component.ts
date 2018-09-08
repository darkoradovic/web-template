import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header = { };
  
  /*
    pravimo novi ts file u kojem ce da smestimo header{},nav{} itd i povezacemo ih pomocu servisa koji ce da napravimo
  
  */

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.header = this.getHeader();
  }

  getHeader(){
    return this.config.getConfig().header;
  }
}
