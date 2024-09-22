import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'OnceUnidosSquash';
  showNavbar:boolean=true;

  constructor(private router: Router){}

  ngOnInit(){
    this.router.events.subscribe(event=>{
      if(this.router.url==='/login'){
        this.showNavbar=false;
      }else{
        this.showNavbar=true;
      }
    });
  }
}
