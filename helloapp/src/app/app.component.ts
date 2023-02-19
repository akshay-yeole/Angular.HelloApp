import { Component } from '@angular/core';
import { DemoserviceService } from './demoservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloapp';

  constructor(demo: DemoserviceService) {
    console.log(demo.getDefaultMessage());
  }

}
