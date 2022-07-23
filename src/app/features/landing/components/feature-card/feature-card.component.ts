import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss'],
})
export class FeatureCardComponent implements OnInit {
  @Input() iconName: string = '';
  @Input() iconColor: string = '';
  @Input() bgColor: string = '';

  constructor() {}

  ngOnInit(): void {}
}
