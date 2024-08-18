import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./page/home/home.component").then((c) => c.HomeComponent),
    pathMatch: "full",
  },
  {
    path: "sound",
    loadComponent: () =>
      import("./page/sound/sound.component").then((c) => c.SoundComponent),
  },
  {
    path: "**",
    redirectTo: "",
  },
];
