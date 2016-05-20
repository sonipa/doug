import {Component, Directive, ElementRef, Renderer} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Http} from '@angular/http';

import {DougComponent} from '../sprites/doug/doug.component';

/////////////////////////
// ** Example Directive
// Notice we don't touch the Element directly
@Directive({
  selector: '[x-large]'
})
export class XLarge {
  constructor(element: ElementRef, renderer: Renderer) {
    // ** IMPORTANT **
    // we must interact with the dom through -Renderer-
    // for webworker/server to see the changes
    renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
    // ^^
  }
}

/////////////////////////
// ** Example Components
@Component({
  selector: 'home',
  directives: [
    DougComponent
  ],
  template: `
    <div class="water"><doug-sprite></doug-sprite></div>
  `,
  styles: [`
   .water{padding:80px;}
  `],
})
export class Home { }

@Component({
  selector: 'about',
  directives: [
  ],
  template: `
  <div class="stars"><a href="https://github.com/sonipa/doug">doug github</a></div>
  `,
  styles: [`
   .stars{background:#999;color:#fff;padding:100px;}
   a {color:#fff;} a:hover{color:yellow;}
  `],
})
export class About { }

/////////////////////////
// ** MAIN APP COMPONENT **
@Component({
  selector: 'app', // <app></app>
  directives: [
    ...ROUTER_DIRECTIVES
  ],
  styles: [`
   pre {
   border-top:#ccc 6px solid;
   background:#f2f2f2;
   }
  `],
  template: `
  <main>
    <router-outlet></router-outlet>
  </main>
  
    
  
<pre>
async data:
{{ data | json }}
about controller: <a [routerLink]=" ['./About'] ">About</a>
home link: <a [routerLink]=" ['./Home'] ">Home</a>
title: {{ title }}
binding: two way binding: <input type="text" [value]="title" (input)="title = $event.target.value" autofocus>
server message: {{ server }}
</pre>
  `
})
@RouteConfig([
  { path: '/', component: Home, name: 'Home', useAsDefault: true },
  { path: '/home', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/**', redirectTo: ['Home'] }
])
export class App {
  title: string = 'ftw';
  data = {};
  server: string;

  constructor(public http: Http) { }

  ngOnInit() {
    setTimeout(() => {
      this.server = 'This was rendered from the server!';
    }, 10);

    this.http.get('/data.json')
      .subscribe(res => {
        this.data = res.json();
      });
  }

}
