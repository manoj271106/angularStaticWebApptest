import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Testing new application </h1>
  <div>{{message}}</div>`
})
export class AppComponent {
  message = '';

  constructor() {
  }
}
