import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { Customer } from 'src/app/interfaces/customer';
import { Order } from 'src/app/interfaces/order';
import { AppElementsService } from 'src/app/services/app-elements.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  orderTerm: string = '';

  toggleNav(main: HTMLDivElement) {
    this.appElementsService.navElement?.classList.toggle('active');
    main.classList.toggle('active');
  }

  cards: Card[] = [
    { name: 'Daily Views', numbers: '1,504', icon: 'eye-outline' },
    { name: 'Sales', numbers: '80', icon: 'cart-outline' },
    { name: 'Comments', numbers: '284', icon: 'chatbubbles-outline' },
    { name: 'Earning', numbers: '$7,842', icon: 'cash-outline' },
  ];

  orders: Order[] = [
    {
      name: 'Star Refrigerator',
      price: 1200,
      payment: 'Paid',
      status: 'Delivered',
      klass: 'status delivered',
    },
    {
      name: 'Window Coolers',
      price: 110,
      payment: 'Due',
      status: 'Pending',
      klass: 'status pending',
    },
    {
      name: 'Speakers',
      price: 620,
      payment: 'Paid',
      status: 'Return',
      klass: 'status return',
    },
    {
      name: 'Hp Laptop',
      price: 110,
      payment: 'Due',
      status: 'In Progress',
      klass: 'status inprogress',
    },
    {
      name: 'Apple Watch',
      price: 1200,
      payment: 'Paid',
      status: 'Delivered',
      klass: 'status delivered',
    },
    {
      name: 'Wall Fan',
      price: 110,
      payment: 'Paid',
      status: 'Pending',
      klass: 'status pending',
    },
    {
      name: 'Adidas Shoes',
      price: 620,
      payment: 'Paid',
      status: 'Return',
      klass: 'status return',
    },
    {
      name: 'Denim Shirts',
      price: 110,
      payment: 'Due',
      status: 'In Progress',
      klass: 'status inprogress',
    },
    {
      name: 'Casual Shoes',
      price: 575,
      payment: 'Paid',
      status: 'Pending',
      klass: 'status pending',
    },
    {
      name: 'Wall Fan',
      price: 110,
      payment: 'Paid',
      status: 'Pending',
      klass: 'status pending',
    },
    {
      name: 'Denim Shirts',
      price: 110,
      payment: 'Due',
      status: 'In Progress',
      klass: 'status inprogress',
    },
  ];

  customers: Customer[] = [
    {
      name: 'David',
      country: 'Italy',
      imgSrc: './assets/img/img1.jpg',
    },
    {
      name: 'Muhammed',
      country: 'India',
      imgSrc: './assets/img/img2.jpg',
    },
    {
      name: 'Amelia',
      country: 'France',
      imgSrc: './assets/img/img3.jpg',
    },
    {
      name: 'Olivia',
      country: 'USA',
      imgSrc: './assets/img/img4.jpg',
    },
    {
      name: 'Amit',
      country: 'Israel',
      imgSrc: './assets/img/img5.jpg',
    },
    {
      name: 'Ashraf',
      country: 'India',
      imgSrc: './assets/img/img6.jpg',
    },
    {
      name: 'Diana',
      country: 'Malaysia',
      imgSrc: './assets/img/img7.jpg',
    },
    {
      name: 'Steve',
      country: 'United Kingdom',
      imgSrc: './assets/img/img8.jpg',
    },
  ];

  constructor(private appElementsService: AppElementsService) {}

  ngOnInit(): void {}
}
