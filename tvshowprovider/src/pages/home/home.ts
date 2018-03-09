import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  originalData: any;
  modifiedData: any;

  constructor(public navCtrl: NavController) {
this.generateShows();
  }
    generateShows()
    {
      this.originalData = [
        {
          show: {
            name: "Westworld",
            genres: [
              "Drama",
              "Science-Fiction",
              "Western"
            ],
            network: {
              id: 8,
              name: "HBO"
            },
            image: {
              medium: "http://static.tvmaze.com/uploads/images/medium_portrait/79/198046.jpg",
              original: "http://static.tvmaze.com/uploads/images/original_untouched/79/198046.jpg"
            },
            summary: "<p>The one-hour drama series <b>Westworld</b> is a dark odyssey about the dawn of artificial consciousness and the evolution of sin. Set at the intersection of the near future and the reimagined past, it explores a world in which every human appetite, no matter how noble or depraved, can be indulged.</p>"
          }
        },
        {
          show: {
            name: "Stranger Things",
            genres: [
              "Drama",
              "Fantasy",
              "Science-Fiction"
            ],
            network: {
              id: 1,
              name: "Netflix"
            },
            image: {
              medium: "http://static.tvmaze.com/uploads/images/medium_portrait/132/330543.jpg",
              original: "http://static.tvmaze.com/uploads/images/original_untouched/132/330543.jpg"
            },
            summary: "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>"
          }
        },
        {
          show: {
            name: "Prison Break",
            genres: [
              "Drama",
              "Crime",
              "Thriller"
            ],
            network: {
              id: 4,
              name: "FOX"
            },
            image: {
              medium: "http://static.tvmaze.com/uploads/images/medium_portrait/104/261034.jpg",
              original: "http://static.tvmaze.com/uploads/images/original_untouched/104/261034.jpg"
            },
            summary: "<p>Lincoln Burrows is currently on death row and scheduled to die in a few months for an assassination his younger brother Michael is convinced he did not commit. With no other options and time winding down, Michael takes drastic measures to get himself incarcerated alongside his brother in Fox River State Penitentiary. Once he's inside, Michael - a structural engineer with the blueprints for the prison - begins to execute an elaborate plan to break Lincoln out and prove him innocent. When Michael arrives at Fox River State Penitentiary, he meets the prison denizens who will, unknowingly, help in his escape plans - his cellmate, the lovelorn Sucre; beautiful prison doctor Dr. Sara Tancredi, who happens to be the governor's daughter; former mob boss John Abruzzi; and Warden Henry Pope. Meanwhile, outside the prison walls, the brothers' childhood friend and Lincoln's lost love, attorney Veronica Donovan, works within the law to free them; Lincoln's teenage son LJ may be going down a path similar to his convicted father's; and Secret Service Agent Paul Kellerman's investigation into Lincoln's case proves that there may be a national conspiracy.</p>"
          }
        }
      ]
    }



  getShows(ev: any){
    this.generateShows();
    let serVal = ev.target.value;
    if(serVal && serVal.trim() != ''){
      this.originalData = this.originalData.filter((data) =>{
        return (data.show.name.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
      })
    }
  }

}
