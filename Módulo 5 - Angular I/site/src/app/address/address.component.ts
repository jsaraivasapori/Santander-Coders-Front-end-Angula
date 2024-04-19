import { Component, Input } from '@angular/core';
import { AddressFeatures } from 'src/models/address-features.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  @Input() addressData! : AddressFeatures
}
