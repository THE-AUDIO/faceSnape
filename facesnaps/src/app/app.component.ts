import { Component, OnInit } from '@angular/core';
import { interval, Observable} from 'rxjs';
import { HeaderComponent } from './core/component/header/header.component';
import { filter, map,tap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  table !: Array<number>;
  interval$!:Observable<string>;
  i!: number;
  // /methode logger /

  logger(text : string){
    console.log(`log: ${text}`);
  }

  ngOnInit(){
    
  };
  
  
}
