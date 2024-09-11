import { Component } from "@angular/core";
import { AudioPlayerSourceDirective } from "../../component/audio-player/audio-player-source.directive";
import { AudioPlayerComponent } from "../../component/audio-player/audio-player.component";

@Component({
  selector: "app-sound",
  standalone: true,
  imports: [AudioPlayerComponent, AudioPlayerSourceDirective],
  templateUrl: "./sound.component.html",
  styleUrl: "./sound.component.scss",
})
export class SoundComponent {
  protected sounds: Sound[] = [
    {
      src: "https://filesamples.com/samples/audio/mp3/sample2.mp3",
      title: "Sample 2",
    },
    {
      src: "https://filesamples.com/samples/audio/mp3/sample4.mp3",
      title: "Sample 4",
    },
  ];

  protected currentSound?: Sound;

  protected onSoundClick(sound: Sound): void {
    this.currentSound = sound;
  }
}

interface Sound {
  src: string;
  title: string;
}
