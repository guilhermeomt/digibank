import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignupComponent } from './pages/signup/signup.component';
import { NgIconsModule } from '@ng-icons/core';
import { FeatherUser, FeatherCreditCard } from '@ng-icons/feather-icons';
import { TablerPig, TablerHandClick } from '@ng-icons/tabler-icons';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    NgIconsModule.withIcons({
      FeatherUser,
      FeatherCreditCard,
      TablerPig,
      TablerHandClick,
    }),
  ],
})
export class AuthModule {}
