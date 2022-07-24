import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  previousItem: number = -1;

  constructor() {}

  ngOnInit(): void {}

  changeItem(id: number) {
    if (this.previousItem !== -1) {
      document
        .getElementById(`item-${this.previousItem.toString()}`)
        ?.classList.remove('selected');
    }

    document.getElementById(`item-${id.toString()}`)?.classList.add('selected');
    this.previousItem = id;
  }
}
