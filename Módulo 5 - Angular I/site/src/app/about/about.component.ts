import { Component, Input } from '@angular/core';
import { AboutFeatures } from 'src/models/about-features.model';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @Input() aboutData!: AboutFeatures

}
