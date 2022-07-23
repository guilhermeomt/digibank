import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NgIconsModule } from '@ng-icons/core';
import { FeatherChevronDown } from '@ng-icons/feather-icons';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, NgIconsModule.withIcons({ FeatherChevronDown })],
  exports: [HeaderComponent],
})
export class SharedModule {}
