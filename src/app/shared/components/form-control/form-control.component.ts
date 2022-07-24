import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlComponent implements OnInit {
  @Input() label!: string;
  @Input() type: string = 'text';
  @Input() placeholder?: string;

  constructor() {}

  ngOnInit(): void {}
}
