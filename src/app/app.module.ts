import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ArbitrageComponent } from './arbitrage/arbitrage.component';
import { MiningComponent } from './mining/mining.component';
import { TradingComponent } from './trading/trading.component';
import { IcoComponent } from './ico/ico.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BalanceComponent } from './profile/balance/balance.component';
import { HistoryComponent } from './profile/history/history.component';
import { DepositComponent } from './profile/deposit/deposit.component';
import { SettingsComponent } from './profile/settings/settings.component';
import { ContactComponent } from './contact/contact.component';
import { TermsComponent } from './terms/terms.component';
import { IndexComponent } from './index/index.component';
import { SigninComponent } from './_shared/signin/signin.component';
import { SignupComponent } from './_shared/signup/signup.component';
import { ChangepassComponent } from './_shared/changepass/changepass.component';
import { RecoverpassComponent } from './_shared/recoverpass/recoverpass.component';
import { enableProdMode } from '@angular/core';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ArbitrageComponent,
    MiningComponent,
    TradingComponent,
    IcoComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    BalanceComponent,
    HistoryComponent,
    DepositComponent,
    SettingsComponent,
    ContactComponent,
    TermsComponent,
    IndexComponent,
    SigninComponent,
    SignupComponent,

    ChangepassComponent,
    RecoverpassComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
