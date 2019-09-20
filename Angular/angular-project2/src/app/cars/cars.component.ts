import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  carsData : any ='';
  cars=[
    {
      brand : 'Audi R8 ',
      img:'https://cdn.pixabay.com/photo/2015/06/05/15/02/audi-798531__340.jpg',
      details:'As the bright sun skips over the horizon to eclipse the skies at the Madras Motor Racing Track, a dazzling yellow Audi R8 V10 shines brightly at the pits. Yes, we at annual track day event are going to set the racing lines on fire to check out the lap-time this track oriented supercar clocks.'
    },
    {
      brand : 'BMW ',
      img:'https://cdn.pixabay.com/photo/2016/04/24/10/48/sports-car-1349139__340.jpg',
      details:'BMW took wraps off the new-gen 3 Series at the 2018 Paris Motor Show. The G20 3 Series takes its inspiration from the resurrected 8 and comes with many modern day features while retaining its characteristic driving dynamics. And the new 3 Series is a lot better looking compared to the F30 model it replaces.'
    },
    {
      brand : 'Ford Mustang',
      img:'https://cdn.pixabay.com/photo/2017/05/23/20/08/mustang-2338377__340.jpg',
      details:'Mustang is designed to custom-fit the way you drive, down to the last detail. From the look of the instrument panel to the sound of its growl to the way it feels tackling a curve, this legend was born to make your own. Plus, Mustang is the 2018 Highest Ranked Midsize Sporty Car in Initial Quality.'
    },
    {
      brand : 'Bugatti',
      img:'https://cdn.pixabay.com/photo/2019/01/08/11/48/car-3921004_960_720.jpg',
      details:'The Divo may not be as fast as the Bugatti Chiron in terms of top speed but that has not stopped this ultra-rare, super expensive limited-run hypercar from being a sellout already!'
    },
    {
      brand : 'Jaguar',
      img:'https://cdn.pixabay.com/photo/2019/07/23/07/42/machine-4356807__340.jpg',
      details:'The XJ is a big sedan, no matter which way you look at it. Over 5.2 metres long and nearly 2 meters wide, it would barely fit in our parking slot. Despite its age, the big Jag manages to turn heads easily even today thanks to its harmonious proportions, low-slung stance and some nice design touches like the wide mesh grille and the steeply raked C-pillars that are designed to gel seamlessly with the rear glass. The updates on the XJ50 include entirely different front and rear bumpers, black finish for the grille, 19-inch wheels and XJ50 badging over the boot lid and side vents. '
    }
  ]

  constructor() { }
  showCar(car)
  {
    this.carsData=car;
  }

  ngOnInit() {
  }

}
