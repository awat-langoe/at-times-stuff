import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    title: "At Times …",
    loadComponent: () =>
      import("./home/home.component").then((c) => c.HomeComponent),
    pathMatch: "full",
  },
  {
    path: "dev",
    title: "At Times Dev",
    loadComponent: () =>
      import("./dev/dev.component").then((c) => c.DevComponent),
  },
  {
    path: "sound",
    title: "At Times Sound",
    loadComponent: () =>
      import("./sound/sound.component").then((c) => c.SoundComponent),
  },
  {
    path: "**",
    redirectTo: "",
  },
];
