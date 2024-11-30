import { Component } from "@angular/core";
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: "app-dev",
  standalone: true,
  imports: [CardComponent],
  templateUrl: "./dev.component.html",
  styleUrl: "./dev.component.scss",
})
export class DevComponent {
  readonly devProjects: DevProject[] = [
    {
      id: "at-times-stuff",
      title: "At Times Stuff",
      description: "This website: All things At Times.",
      url: "https://github.com/awat-langoe/at-times-stuff",
    },
    {
      id: "clocker",
      title: "Clocker",
      description:
        "Track your working hours. Automatically clock in when you arrive at the office using geofencing.",
      url: "https://github.com/awat-langoe/clocker-android",
    },
    {
      id: "gief",
      title: "Gief",
      description:
        "Easily create and share wish lists with friends. Track purchases in real time and avoid duplicates.",
      url: "https://github.com/awat-langoe/gief",
    },
    {
      id: "music-library",
      title: "Music Library",
      description:
        "Keep your music collection intact outside of streaming services, ensuring your favorite tracks are never removed or lost.",
      url: "https://github.com/awat-langoe/music-library",
    },
    {
      id: "my-perks",
      title: "My Perks",
      description: "Stay updated on all your customer benefits in one place.",
      url: "https://github.com/awat-langoe/my-perks",
    },
    {
      id: "tally",
      title: "Tally",
      description: "An inventory tracker with a built-in barcode scanner.",
      url: "https://github.com/awat-langoe/tally-android",
    },
  ];
}

interface DevProject {
  id: string;
  title: string;
  description: string;
  url: string;
}
