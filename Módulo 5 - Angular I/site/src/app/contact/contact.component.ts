import { Component, Input } from '@angular/core';
import { ContactFeatures } from 'src/models/contact-features.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() contactData! : ContactFeatures

}
