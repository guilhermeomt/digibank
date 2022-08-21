import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  previousItem: number = -1;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/api/customers').subscribe((data) => {
      console.log(data);
    });
    this.http.get('/api/accounts').subscribe((data) => {
      console.log(data);
    });
    this.http.get('/api/cards').subscribe((data) => {
      console.log(data);
    });
  }

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
