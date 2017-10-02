import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ArbitrageComponent } from './arbitrage/arbitrage.component';
import { IcoComponent } from './ico/ico.component';
import { MiningComponent } from './mining/mining.component';
import { ProfileComponent } from './profile/profile.component';
import { TradingComponent } from './trading/trading.component';
import { BalanceComponent } from './profile/balance/balance.component';
import { HistoryComponent } from './profile/history/history.component';
import { DepositComponent } from './profile/deposit/deposit.component';
import { SettingsComponent } from './profile/settings/settings.component';
import { ContactComponent } from './contact/contact.component';
import { TermsComponent } from './terms/terms.component';


export const appRoutes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'index', component: IndexComponent },
  { path: 'arbitrage', component: ArbitrageComponent },
  { path: 'mining', component: MiningComponent },
  { path: 'trading', component: TradingComponent },
  { path: 'ico', component: IcoComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'balance', component: BalanceComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
export const routing = RouterModule.forRoot(appRoutes);
