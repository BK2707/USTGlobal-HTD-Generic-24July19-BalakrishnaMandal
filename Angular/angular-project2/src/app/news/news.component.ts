import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  
  newshead:any='';

myNews=[
  { 
    topic:'Political',
    headline:'Congress Working Committee meeting divided on Kashmir',
    img:'https://www.thehindu.com/news/national/gar43o/article28872511.ece/ALTERNATES/FREE_460/TH08NEWS1RAHUL',
    news:'The CWC meeting on Tuesday night saw a heated debate between the old guard and the young leaders. Two CWC members, Jyotiraditya Scindia and Deepender Hooda, had already articulated their view supporting the revocation of Article 370.'
  },
  { 
    topic:'International News',
    headline:'Photo of officers leading black man by a rope in Texas sparks outrage',
    img:'https://www.thehindu.com/news/international/cfqy9o/article28842604.ece/ALTERNATES/FREE_960/texasjpg',
    news:'A police chief in Texas has apologized after a photo went viral of two officers mounted on horseback walking a handcuffed black man by a rope, as if on a leash.The image caused outrage, serving as a painful reminder of some of the bleakest moments in America brutally racist past, including the chaining of enslaved people and lynching of blacks in the Jim Crow South in the years after emancipation.'
  },
  { 
    topic:'Economy',
    headline:'RBI takes offbeat tack to help reverse growth slowdown',
    img:'https://www.thehindu.com/business/Economy/g6avmt/article28873041.ece/ALTERNATES/FREE_960/INDIAECONOMY',
    news:'The Reserve Bank of India on Wednesday opted to break with convention by reducing the key policy rate, the repo rate, by 35 basis points (bps) to 5.4% as it focused monetary policy measures on helping revive demand to tackle a deepening economic slowdown.'
  },
  { 
    topic:'Sports',
    headline:'West Indies vs India 1st ODI: With Shikhar Dhawan back, KL Rahul could be back at No. 4',
    img:'https://www.thehindu.com/sport/cricket/nx0obd/article28856926.ece/ALTERNATES/FREE_960/KOHLIK',
    news:'With an air of invincibility, India return to the format that gave them a heartbreak in the not-too-distant past, facing West Indies in the first of the three-match ODI series here on Thursday.Shikhar Dhawan makes a comeback in the format where he has been India’s third-best player after skipper Virat Kohli and his deputy Rohit Sharma.'
  },
  { 
    topic:'Entertainment',
    headline:'National film awards to be announced soon',
    img:'https://www.thehindu.com/news/national/xgqeb/article28844765.ece/ALTERNATES/FREE_960/INDIA-ARTS-CINEMA-BOLLYWOOD',
    news:'Winners of the long-delayed and much-awaited 66th national film awards are likely to be announced soon with the jury meeting and deliberations scheduled to start from August 7 onwards at New Delhi’s Siri Fort auditorium.'
  }]
  constructor() { }
  showNews(newsReport)
  {
    this.newshead=newsReport;
  }

  ngOnInit() {
  }

}
