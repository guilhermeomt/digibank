import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  @Input() variant: 'primary' | 'secondary' | 'cta' = 'primary';
  @Input() outlined = false;

  constructor() {}

  ngOnInit(): void {}
}
