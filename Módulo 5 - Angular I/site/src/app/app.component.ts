import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage: 'HOME' | 'ABOUT' | 'CONTACT' | 'ADDRESS' = 'HOME'

  goTOHome() : void{
    this.currentPage = 'HOME'
  }
  goToAbout() : void{
    this.currentPage = 'ABOUT'
  }

  goToAddress(){
    this.currentPage = 'ADDRESS'
  }
  goToContact() : void{
    this.currentPage = 'CONTACT'
  }
  
}
