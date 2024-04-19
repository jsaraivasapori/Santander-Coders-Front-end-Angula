import { Component } from '@angular/core';
import { SectionFeatures } from 'src/models/section-features.models';
import { Pages } from './constants/pages.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage!: Pages
  pages = Pages

// Passagem de um dado de um componente pai para um componente filho, simulando um consumo de api
  sectionFeatures : SectionFeatures = {
    title: "Destaques",
    feature1: {
      title: "Destaque 1",
      image:'feature1.png',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor arcu, malesuada eget posuere et.'
    },
    feature2:{
      title: 'Destaque 2',
      image:'feature2.png',
      text:'Aenean laoreet, felis id sollicitudin fringilla, leo orci iaculis eros, et volutpat nunc lacus ut sapien.'
    },
    feature3:{
      title: 'Destaque 3',
      image:'feature3.png',
      text:'Aenean non eros congue leo consectetur fermentum. Quisque ut dignissim tortor, eget porttitor magna.'
    },
    feature4:{
      title: 'Destaque 4',
      image:'feature4.png',
      text:'Duis id odio dapibus, finibus tortor eget, cursus nunc. Morbi egestas nisl orci, in cursus ipsum cursus et.'
    }
  }


  goTo(page: Pages) : void{
    this.currentPage = page
  }
  
  
}
