import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-testemonial',
  templateUrl: './testemonial.component.html',
  styleUrls: ['./testemonial.component.css']
})
export class TestemonialComponent implements OnInit {

  testimonials = { };

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.testimonials = this.getTestimonials();
  }

  getTestimonials(){
    return this.config.getConfig().testimonials;
  }

}
