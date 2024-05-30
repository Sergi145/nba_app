import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {


  ngOnInit(): void {
    console.log("Iniciado");
  }

    public sidebar = [
      {
        label: 'Equipos',
        icon: 'group',
        url: './teams'
      }
    ]
}
