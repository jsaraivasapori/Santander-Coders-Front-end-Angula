import { Component } from '@angular/core';
import { SectionFeatures } from 'src/models/section-features.models';
import { Pages } from './constants/pages.enum';
import { AboutFeatures } from 'src/models/about-features.model';
import { AddressFeatures } from 'src/models/address-features.model';
import { ContactFeatures } from 'src/models/contact-features.model';

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

  aboutFeatures:AboutFeatures = {
    title:"Sobre a empresa",
    text1 : `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor
    arcu, malesuada eget posuere et, aliquam non elit. Sed maximus
    ullamcorper dui, ac sollicitudin quam molestie ac. Aenean laoreet,
    felis id sollicitudin fringilla, leo orci iaculis eros, et volutpat
    nunc lacus ut sapien. Aliquam velit justo, vestibulum et augue ut,
    efficitur ultrices justo. Aenean non eros congue leo consectetur
    fermentum. Quisque ut dignissim tortor, eget porttitor magna. Etiam
    sem turpis, aliquam sit amet nisi non, bibendum finibus neque. Duis
    id odio dapibus, finibus tortor eget, cursus nunc. Morbi egestas
    nisl orci, in cursus ipsum cursus et. Pellentesque in suscipit
    ipsum, vel auctor nisl. Quisque vitae vehicula velit. Integer dolor
    sapien, rutrum faucibus eros ac, hendrerit aliquet diam. Quisque non
    sem eu odio vestibulum facilisis ac aliquam tellus. Cras aliquet
    velit quis suscipit tincidunt. Phasellus ut aliquam nulla.`,
    text2:`
    Nam dictum diam nibh, id ultricies nunc rhoncus at. Nullam lobortis,
      erat vitae tempus semper, ante leo elementum odio, eu viverra nisi
      est in odio. Sed mi quam, ultrices vel placerat a, finibus ut neque.
      Curabitur eu leo eleifend, congue nisi et, vestibulum ex. Nulla
      hendrerit ex non orci dictum mattis. Fusce faucibus vitae massa nec
      fermentum. Nam tristique libero ac tellus vestibulum bibendum.
      Phasellus euismod, metus ut pretium vulputate, mi orci dignissim
      enim, id egestas augue ex in neque. Nulla ac dictum arcu, sit amet
      fringilla nisi. Duis elementum blandit nisi et ultrices. Morbi
      scelerisque auctor dui, egestas varius tellus. Sed id placerat
      felis.`
  }

  addressFeatures : AddressFeatures = {
    title: "Endereço",
    text1: `
      Sed vel libero sed enim interdum ultrices. Praesent blandit accumsan
      neque a laoreet. Sed efficitur orci sit amet risus ultrices, non
      volutpat lacus dictum. Aliquam facilisis nulla libero, a varius
      metus gravida a. Praesent faucibus imperdiet pretium. Nam eget velit
      in ligula dictum lacinia vel ut odio. Nam at elit purus. Morbi sit
      amet porta arcu, id gravida orci. Phasellus dapibus, velit vel
      rutrum ullamcorper, nisi urna imperdiet ex, quis efficitur elit
      massa sit amet massa. Vestibulum non luctus mauris.`
  }

  contactFeatures: ContactFeatures = {
    title : "Contato",
    labelEmail : "Email",
    labelMensagem: "Mensagem",
    btnEnviar: "Enviar"
  }
  goTo(page: Pages) : void{
    this.currentPage = page
  }
  
  
}
