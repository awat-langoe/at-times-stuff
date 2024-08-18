import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    title: "At Times …",
    loadComponent: () =>
      import("./page/home/home.component").then((c) => c.HomeComponent),
    pathMatch: "full",
  },
  {
    path: "sound",
    title: "At Times Sound",
    loadComponent: () =>
      import("./page/sound/sound.component").then((c) => c.SoundComponent),
  },
  {
    path: "**",
    redirectTo: "",
  },
];
