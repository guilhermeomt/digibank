import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NgIconsModule } from '@ng-icons/core';
import { FeatherChevronDown } from '@ng-icons/feather-icons';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [HeaderComponent, ButtonComponent],
  imports: [CommonModule, NgIconsModule.withIcons({ FeatherChevronDown })],
  exports: [HeaderComponent, ButtonComponent],
})
export class SharedModule {}
