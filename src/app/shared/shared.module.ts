import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  FeatherChevronDown,
  FeatherChevronRight,
  FeatherFacebook,
  FeatherInstagram,
  FeatherYoutube,
} from '@ng-icons/feather-icons';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, ButtonComponent, FooterComponent],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      FeatherChevronDown,
      FeatherChevronRight,
      FeatherFacebook,
      FeatherInstagram,
      FeatherYoutube,
    }),
  ],
  exports: [HeaderComponent, ButtonComponent, FooterComponent],
})
export class SharedModule {}
