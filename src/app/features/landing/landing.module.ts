import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LandingComponent } from './pages/landing.component';
import { HeroComponent } from './components/hero/hero.component';
import { NgIconsModule } from '@ng-icons/core';
import { FeatherChevronRight } from '@ng-icons/feather-icons';

@NgModule({
  declarations: [LandingComponent, HeroComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgIconsModule.withIcons({ FeatherChevronRight }),
  ],
  exports: [LandingComponent],
})
export class LandingModule {}
