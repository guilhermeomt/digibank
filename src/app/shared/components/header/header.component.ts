import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  constructor() {}
  scrolled = false;

  @HostListener('window:scroll', ['$event']) onScroll(event: any) {
    const verticalOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (verticalOffset > 0) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }

  ngOnInit(): void {}

  test(e: any) {
    console.log(e);
  }
}
