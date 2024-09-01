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
      src: "https://file-examples.com/storage/fefda3519566d3360a0efb3/2017/11/file_example_MP3_700KB.mp3",
      title: "Example MP3 700KB",
    },
    {
      src: "https://file-examples.com/storage/fefda3519566d3360a0efb3/2017/11/file_example_MP3_1MG.mp3",
      title: "Example MP3 1MB",
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
