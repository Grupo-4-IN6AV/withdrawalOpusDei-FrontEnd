import { Component } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';


interface SideNavToggle 
{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-set-components-organizer',
  templateUrl: './set-components-organizer.component.html',
  styleUrls: ['./set-components-organizer.component.css']
})
export class SetComponentsOrganizerComponent{

  constructor(private _CargarScripts: CargarScriptsService)
  {
    _CargarScripts.Carga(["scrollBar"]);
  }

  isSideNavCollapsed = false;
  screenWidth = 0;
  onToggleSideNav(data: SideNavToggle): void 
  {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

}
