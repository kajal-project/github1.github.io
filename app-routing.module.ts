import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'my-order',
    loadChildren: () => import('./my-order/my-order.module').then( m => m.MyOrderPageModule)
  },
  {
    path: 'my-address',
    loadChildren: () => import('./my-address/my-address.module').then( m => m.MyAddressPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'terms-and-conditions',
    loadChildren: () => import('./terms-and-conditions/terms-and-conditions.module').then( m => m.TermsAndConditionsPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'refer-friend',
    loadChildren: () => import('./refer-friend/refer-friend.module').then( m => m.ReferFriendPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  }


  // {
  //   path: 'wallet',
  //   loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
  // },
  // {
  //   path: 'wallet',
  //   loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
  // }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
