import { Component, Input } from '@angular/core';
import { SectionFeatures } from 'src/models/section-features.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() homeData!: SectionFeatures  // ! significa como obrigatoria, vai ter valor
}
