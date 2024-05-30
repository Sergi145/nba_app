import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

    public sidebar = [
      {
        label: 'Equipos',
        icon: 'group',
        url: './teams'
      }
    ]
}
