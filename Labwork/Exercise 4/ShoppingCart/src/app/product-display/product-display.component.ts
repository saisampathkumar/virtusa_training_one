import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {
  @Input() id: number = -1;

  itemsData: any[] = [{
    number: 1,
    price: 2,
    name: "Apple",
    description: `An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). 
    Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. 
    Apples have been grown for thousands of years in Asia and Europe and were brought to North America by European colonists.`,
    imageUrl: "./assets/RedApple.jpeg",
  }, {
    number: 2,
    name: "Mango",
    price: 6,
    description: `A mango is a juicy stone fruit (drupe) produced from numerous species of tropical trees belonging to the flowering plant genus Mangifera, cultivated mostly for their edible fruit.
    Most of these species are found in nature as wild mangoes. 
    Worldwide, there are several hundred cultivars of mango. 
    Depending on the cultivar, mango fruit varies in size, shape, sweetness, skin color, and flesh color which may be pale yellow, gold, or orange.`,
    imageUrl: "./assets/Mango.jpg",
  }, {
    number: 3,
    price: 4,
    name: "Orange",
    description: `The orange is the fruit of the citrus species Citrus sinensis in the family Rutaceae, native to China.
    It is also called sweet orange, to distinguish it from the related Citrus aurantium, referred to as bitter orange.
    orange trees were found to be the most cultivated fruit tree in the world.  `,
    imageUrl: "./assets/Orange.jpg",
  }, {
    price: 8,
    number: 4,
    name: "Pine Apple",
    description: `The pineapple (Ananas comosus) is a tropical plant with an edible fruit, also called a pineapple, and the most economically significant plant in the family Bromeliaceae.
    The pineapple is indigenous to South America where it has been cultivated for many centuries. 
    The introduction of the pineapple cultivation to Europe in the 17th century made it a significant cultural icon of luxury. `,
    imageUrl: "./assets/PineApple.jpeg",
  }, {
    number: 5,
    price: 10,
    name: "Water Mellon",
    description: `Watermelon (Citrullus lanatus) is a plant species in the family Cucurbitaceae, a vine-like flowering plant originating in West Africa. 
    It is a highly cultivated fruit worldwide, having more than 1000 varieties.
    Watermelon is a scrambling and trailing vine in the flowering plant family Cucurbitaceae.`,
    imageUrl: "./assets/WaterMelon.jpg",
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
