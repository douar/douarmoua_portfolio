import { NgModule } from '@angular/core';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";


const MaterialComponents:any[] = [
  MatExpansionModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule
]
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
