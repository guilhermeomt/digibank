import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  features = [
    {
      title: 'Dinheiro rendendo 104% do CDI',
      iconName: 'feather-dollar-sign',
      iconColor: '#0CD68A',
      bgColor: '#C3FFE9',
    },
    {
      title: 'Transfira dinheiro sem pagar taxas',
      iconName: 'feather-repeat',
      iconColor: '#0CB1D6',
      bgColor: '#C3F4FF',
    },
    {
      title: 'Cartão de crédito sem anuidade',
      iconName: 'feather-credit-card',
      iconColor: '#B80CD6',
      bgColor: '#F6C3FF',
    },
    {
      title: 'Acompanhe e controle despesas',
      iconName: 'feather-bar-chart',
      iconColor: '#D60C19',
      bgColor: '#FFC3C7',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
