import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  sidebarItems = [
    {label: 'Equipos', icon: 'group', url: './teams'}
  ]

  ngOnInit(): void {
    console.log("Iniciado");
  }


}
