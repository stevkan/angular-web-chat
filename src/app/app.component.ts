import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BotMockSample';
  public a:boolean=true;
  public showBot()
{
  this.a=!this.a;
}
}

