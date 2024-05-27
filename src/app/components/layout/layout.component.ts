import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
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
