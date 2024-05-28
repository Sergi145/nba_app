import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
    public sidebar = [
      {
        label: 'Equipos',
        icon: 'group',
        url: './teams'
      }
    ]
}
