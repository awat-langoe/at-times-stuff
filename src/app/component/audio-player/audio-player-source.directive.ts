import { Directive, ElementRef, HostListener, inject } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Directive({
  selector: "audio[appAudioPlayerSource]",
  standalone: true,
})
export class AudioPlayerSourceDirective {
  private readonly elementRef = inject(
    ElementRef,
  ) as ElementRef<HTMLAudioElement>;
  private readonly player = this.elementRef.nativeElement;

  readonly loadedMetadata: Observable<void> = new Subject<void>();

  readonly paused: Observable<boolean> = new Subject<boolean>();

  readonly currentTime: Observable<number> = new Subject<number>();

  get duration(): number {
    return this.player.duration;
  }

  get volume(): number {
    return this.player.volume;
  }

  set volume(value: number) {
    this.player.volume = value;
  }

  set muted(value: boolean) {
    this.player.muted = value;
  }

  play(): void {
    this.player.play();
  }

  pause(): void {
    this.player.pause();
  }

  setTime(time: number): void {
    this.player.currentTime = time;
  }

  @HostListener("loadedmetadata") onLoadedMetadata(): void {
    const loadedMetadataSubject = this.loadedMetadata as Subject<void>;
    loadedMetadataSubject.next();
  }

  @HostListener("play") onPlay(): void {
    const pausedSubject = this.paused as Subject<boolean>;
    pausedSubject.next(false);
  }

  @HostListener("pause") onPause(): void {
    const pausedSubject = this.paused as Subject<boolean>;
    pausedSubject.next(true);
  }

  @HostListener("timeupdate") onTimeUpdate(): void {
    const currentTimeSubject = this.currentTime as Subject<number>;
    currentTimeSubject.next(this.player.currentTime);
  }
}
