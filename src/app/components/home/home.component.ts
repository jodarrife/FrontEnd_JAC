import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public alerts: Array<any> = [];
  public sliders: Array<any> = [];

  constructor() {
      this.sliders.push(
          {
              imagePath: 'assets/img/slider1.jpg',
              label: 'First slide label',
              text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
          },
          {
              imagePath: 'assets/img/slider2.jpg',
              label: 'Second slide label',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          },
          {
              imagePath: 'assets/img/slider3.jpg',
              label: 'Third slide label',
              text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
          }
      );

      this.alerts.push(
          {
              id: 1,
              type: 'success',
              message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates est animi quibusdam praesentium quam, et perspiciatis,
              consectetur velit culpa molestias dignissimos
              voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
          },
          {
              id: 2,
              type: 'warning',
              message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates est animi quibusdam praesentium quam, et perspiciatis,
              consectetur velit culpa molestias dignissimos
              voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
          }
      );
  }

  ngOnInit() {}

  public closeAlert(alert: any) {
      const index: number = this.alerts.indexOf(alert);
      this.alerts.splice(index, 1);
  }
}