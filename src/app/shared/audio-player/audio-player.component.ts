import { AsyncPipe, DatePipe } from "@angular/common";
import {
  AfterContentInit,
  Component,
  ContentChild,
  Input,
} from "@angular/core";
import { AudioPlayerSourceDirective } from "./audio-player-source.directive";

@Component({
  selector: "app-audio-player",
  standalone: true,
  imports: [AsyncPipe, DatePipe],
  templateUrl: "./audio-player.component.html",
  styleUrl: "./audio-player.component.scss",
})
export class AudioPlayerComponent implements AfterContentInit {
  @ContentChild(AudioPlayerSourceDirective)
  private readonly audioPlayerSource!: AudioPlayerSourceDirective;

  protected paused = true;

  protected time = 0;
  protected duration?: number;
  private seekSliderInputActive = false;

  protected volume = 0.5;
  protected muted = false;

  @Input() title?: string;

  ngAfterContentInit(): void {
    this.audioPlayerSource.loadedMetadata.subscribe(() => {
      const duration = this.audioPlayerSource.duration;
      this.duration = duration;
    });

    this.audioPlayerSource.currentTime.subscribe((currentTime: number) => {
      if (this.seekSliderInputActive) return;

      this.time = currentTime;
    });

    this.audioPlayerSource.paused.subscribe((paused: boolean) => {
      this.paused = paused;
    });

    this.audioPlayerSource.volume = this.volume;
  }

  protected onSeekSliderChange(value: number): void {
    this.audioPlayerSource.setTime(value);

    this.seekSliderInputActive = false;
  }

  protected onSeekSliderInput(): void {
    this.seekSliderInputActive = true;
  }

  protected onPlayClick(): void {
    this.audioPlayerSource.play();
  }

  protected onPauseClick(): void {
    this.audioPlayerSource.pause();
  }

  protected onMuteClick(): void {
    this.muted = !this.muted;
    this.audioPlayerSource.muted = this.muted;
  }

  protected onVolumeSliderChange(value: number): void {
    this.volume = value;
    this.audioPlayerSource.volume = value;

    if (this.muted) {
      this.muted = !this.muted;
      this.audioPlayerSource.muted = this.muted;
    }
  }
}
