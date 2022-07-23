import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LandingComponent } from './pages/landing.component';
import { HeroComponent } from './components/hero/hero.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  FeatherChevronRight,
  FeatherDollarSign,
  FeatherCreditCard,
  FeatherBarChart,
  FeatherRepeat,
} from '@ng-icons/feather-icons';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';

@NgModule({
  declarations: [LandingComponent, HeroComponent, FeatureCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgIconsModule.withIcons({
      FeatherChevronRight,
      FeatherDollarSign,
      FeatherCreditCard,
      FeatherBarChart,
      FeatherRepeat,
    }),
  ],
  exports: [LandingComponent],
})
export class LandingModule {}
