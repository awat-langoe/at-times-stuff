import { AsyncPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import {
  ActivatedRoute,
  Event,
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
} from "@angular/router";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [AsyncPipe, RouterLink, RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  protected readonly headerTitle$ = this.router.events.pipe(
    filter(
      (event: Event): event is NavigationEnd => event instanceof NavigationEnd,
    ),
    map(() => {
      let title: string | undefined;

      let route = this.activatedRoute.root;
      while (route.firstChild) {
        route = route.firstChild;
        title = route.snapshot.title ?? title;
      }

      return title;
    }),
  );

  protected readonly sidenavLinks: SidenavLink[] = [
    {
      title: "Home",
      route: "/",
    },
    {
      title: "… Dev",
      route: "/dev",
    },
    {
      title: "… Sound",
      route: "/sound",
    },
  ];
}

export interface SidenavLink {
  title: string;
  route: string;
}
