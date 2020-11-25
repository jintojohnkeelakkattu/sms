import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SMS';
  public isLogin: boolean = true;
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if(this.router.url.indexOf("/login")>=0) {
        this.isLogin = true;
      }else {
        this.isLogin = false;
      }
    })
  }
}
