import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { NavItem } from './models/nav-item.model';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  navTabs: NavItem[] = [
    { label: 'Car', route: './car' },
    { label: 'Exterior', route: './exterior' }
  ]

  activeTab: NavItem = this.navTabs[0];
  background: ThemePalette = 'accent';

  constructor() { }

  ngOnInit(): void {
  }

  onTabClick(tab: NavItem) {
    this.activeTab = tab;
  }

}
