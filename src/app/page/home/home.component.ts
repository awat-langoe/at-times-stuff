import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  protected readonly homeLinks: HomeLink[] = [
    {
      title: "… Dev",
      routerLink: "/dev",
    },
    {
      title: "… Sound",
      routerLink: "/sound",
    },
  ];
}

export interface HomeLink {
  title: string;
  routerLink: string;
}
