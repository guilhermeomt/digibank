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
import { FormControlComponent } from './components/form-control/form-control.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [HeaderComponent, ButtonComponent, FooterComponent, FormControlComponent, ModalComponent],
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
  exports: [HeaderComponent, ButtonComponent, FooterComponent, FormControlComponent, ModalComponent],
})
export class SharedModule {}
