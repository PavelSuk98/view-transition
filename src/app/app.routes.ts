import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FeaturesPageComponent } from './pages/features-page/features-page.component';
import { MarketplacePageComponent } from './pages/marketplace-page/marketplace-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { CompanyPageComponent } from './pages/company-page/company-page.component';

export const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            { path: '', component: HomepageComponent, title: 'Welcome to homepage'},
            { path: 'features', component: FeaturesPageComponent, title: 'Features'},
            { path: 'marketplace', component: MarketplacePageComponent, title: 'Marketplace'},
            { path: 'product-detail', component: ProductDetailPageComponent, title: 'Product Detail'},
            { path: 'company', component: CompanyPageComponent, title: 'Company page'},
        ]
    },
    { path: '**', component: NotFoundPageComponent, title: 'Not Found Page'}
];
