import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  isExpanded = false;
  selectedCountryCode = 'us';
  countryCodes = ['us', 'in', 'de', 'fr', 'br', 'pt'];
  customLabels = {
    'us': 'United States',
    'in': 'India',
    'de': 'Germany',
    'fr': 'France',
    'br': 'Brazil',
    'pt': 'Portugal'
  };
  changeSelectedCountryCode(value: string): void {
    this.selectedCountryCode = value;
    console.log(value);
    var s = "this.customLabels" + '.' + value
    for (let key in this.customLabels) {
      console.log("      key:", key, "value:", this.customLabels[key]);
    }
    console.log(this.customLabels[value]);
  }

  
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  constructor() { }

  ngOnInit() {
  }

}
