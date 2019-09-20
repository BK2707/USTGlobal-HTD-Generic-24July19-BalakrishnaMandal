import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {
  bikeData:any='';
  bikes =[
    {
      brand : 'KTM RC 200',
      img: 'https://imgd.aeplcdn.com/1280x720/bw/ec/26837/KTM-RC200-Front-threequarter-89342.jpg?v=201711021421&wm=2&q=80',
      description:'KTM RC200 Engine Specifications & Transmission Power is drawn from a 199.5cc, single cylinder, engine putting out maximum power of 25bhp along with 19 Nm of torque and the power is directed to wheels via a six-speed gearbox.'
    },
    {
      brand : 'Royal Enfeild',
      img: 'https://4.bp.blogspot.com/-jl4a-ACc4MI/TxHaSwyNUSI/AAAAAAAAARM/JIr_a4tvQv4/s1600/Royal%2BEnfield_caferacer.JPG',
      description:'The Continental GT has at its heart a fuel-injected 648cc parallel twin air/oil cooled motor that generates 47bhp and 52Nm. It feeds the rear wheel via a six-speed gearbox and chain drive. The chassis, brakes and suspension are all modern-feeling, with all the charm that their retro looks offer. The brakes are single discs at both ends, with a 320mm disc at the front, and a 240mm disc at the rear. ABS is standard. The suspension has conventional forks at the front and twin gas-charged shock absorbers at the rear, with preload adjustment. The tyres are technically tubeless but they do require a tube inside as the spoked 18-inch rims are not airtight. '
    },
    {
      brand : 'Triumph Tiger',
      img: 'https://cdp.azureedge.net/products-private/prod/f26d0330-8171-4e4c-9e00-02dbb7b40de8/20558383-7953-4928-a699-8f4e15fa8678/00000000-0000-0000-0000-000000000000/f7e81b64-12ab-48bb-a75e-a619012d69b6/2000000001.jpg',
      description:'The Triumph Tiger 800 is a dual-sport motorcycle launched in 2010 by British manufacturer Triumph Motorcycles. The Tiger 800 XR is a more road-oriented bike, while the Tiger 800 XC is designed as a more off-road vehicle'
    },
    {
      brand : 'BMW R1200 GS',
      img: 'https://imgd.aeplcdn.com/1280x720/bw/ec/29541/BMW-R1200-GS-Adventure-Side-99095.jpg?v=201711021421&q=80',
      description:'The GS is a family of dual sport motorcycles in the BMW scheme of things. The R1200 GS is the flagship BMW dual sport model and is also available in the ‘Adventure’ trim. The R1200 GS is BMW’s top-selling motorcycle across the globe and became famous after the ‘Long Way Down’ and ‘Long Way Round’ trips by Ewan McGregor and Charlie Boorman.'
    },
    {
      brand : 'KTM Duke 390',
      img: 'https://imgd.aeplcdn.com/1280x720/bw/ec/27224/KTM-390-Duke-Front-threequarter-117052.jpg?wm=0&q=80',
      description:'Call it the baby 1290 Super Duke R or the BMW G310R destroyer, the 2017 390 Duke is a new bike from KTM that is made in India and exported to the world. The older iteration of the 390 Duke was known for its aggressive nature and the ability to keep up with some parallel-twin bikes on the highway.'
    },
    {
      brand : 'Royal Enfield',
      img: 'https://imgd.aeplcdn.com/1280x720/n/bw/models/colors/royal-enfield-himalayan-granite-1554119089762.jpg?q=80',
      description:'Built for all roads and no roads. The first go anywhere Royal Enfield. Ride Now! EMI starts at Rs. 2490/- per Lakh. Zero Down Payment for On-road Price. Instant Loan. 5 Speed Constant Mesh. Electronic fuel injection. Aircooled. 4 stroke.'
    },
    {
      brand : 'Pulsar',
      img: 'https://imgd.aeplcdn.com/393x221/n/bw/models/colors/bajaj-pulsar-ns200-red-1486469744017.jpg?20190103151915&q=85',
      description:'The Bajaj Pulsar 200NS/NS200 is a sports bike made by Bajaj Auto. The NS stands for Naked Sport. The Pulsar 200NS/NS200 has a single-cylinder, four-stroke, triple spark-ignition & liquid-cooled engine.'
    },
    {
      brand : 'Harley davidson',
      img: 'https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my19/street/street-750/personalization/19-street-750-gallery-1.jpg',
      description:'Check on Road Price in Your City. Full Specs Features Review Comparisons & More! Dealers & Service Center. Full Details of Bike. Expert Reviews. Most Accurate Price. Brands: Aprilia, Benelli, BMW, Ducati, Hyosung, Kawasaki, MVAgusta, Moto Guzzi, Tork, Triumph.'
    }
  ]

  constructor() { }
  sendBike(bike)
  {
    this.bikeData=bike;
  }

  ngOnInit() {
  }

}
