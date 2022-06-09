import {
  Component,
  OnInit,
  ViewChildren,
  ViewChild,
  QueryList,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { NavItem } from 'src/app/interfaces/nav-item';
import { AppElementsService } from 'src/app/services/app-elements.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit, AfterViewInit {
  navItems: NavItem[] = [
    { link: '#', icon: 'logo-apple', title: 'brand name' },
    { link: 'dashboard', icon: 'home-outline', title: 'dashboard' },
    { link: 'customers', icon: 'people-outline', title: 'customers' },
    { link: 'message', icon: 'chatbubble-outline', title: 'message' },
    { link: 'help', icon: 'help-outline', title: 'help' },
    { link: 'settings', icon: 'settings-outline', title: 'settings' },
    { link: 'password', icon: 'lock-closed-outline', title: 'password' },
    { link: 'sign out', icon: 'log-out-outline', title: 'sign out' },
  ];

  @ViewChildren('list') lists!: QueryList<ElementRef>;
  @ViewChild('navigator') navElement!: ElementRef;

  activeLink(list: HTMLElement): void {
    this.lists
      .toArray()
      .forEach((list$) => list$.nativeElement.classList.remove('hovered'));

    list.classList.add('hovered');
  }

  constructor(private appElementsService: AppElementsService) {}

  ngAfterViewInit(): void {
    this.appElementsService.navElement = this.navElement.nativeElement;
  }

  ngOnInit(): void {}
}
