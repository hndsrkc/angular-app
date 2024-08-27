import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  plants = [
    { name: 'Acanthaceae', image: 'Acanthaceae', description: 'Seeds 1 to over 20 per locule, held on thickened curved laterally compressed hook-shaped outgrowths (retinaculae) from the funicle (retinaculae papilliform in Nelsonioideae and absent in Thunbergioideae), discoid to spheroid, reniform or cordiform to subglobose, surface often covered in hygroscopic hairs or glabrous and then smooth or variously sculptured.'},
    { name: 'Achariaceae', image: 'Achariaceae', description: 'Achariaceae are a variable group difficult to characterise, but are usually trees and shrubs with simple, alternate or spirally arranged leaves, with toothed or entire margins, actinomorphic flowers with a conspicuous scale on the inner surface of the petals and lacking a disk.'},
    { name: 'Alismataceae', image: 'Alismataceae', description: 'Carpels distinct and free, few or many, capitate in our species, each with usually 1 ovule; style usually persistent, appearing as a beak on the fruit'},
    { name: 'Amaryllidaceae', image: 'Amaryllidaceae', description: 'Perianth inserted below or usually above the ovary, petaloid, often withering and persisting, with or without a tube; segments or lobes 6, in 2 series, all equal and similar or the inner smaller or larger than the outer; corona often present'}
  ];

}