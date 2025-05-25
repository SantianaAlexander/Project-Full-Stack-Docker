import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  messaggio : any;
  constructor(private http: HttpClient)
  {
    this.http.get<any>("https://5000-santianaale-projectfull-xlz68r234nj.ws-eu119.gitpod.io/simple_json")
    .subscribe(
      (data) => this.messaggio = data
    )
  }
}
