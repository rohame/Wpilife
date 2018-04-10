import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { HomeComponentComponent } from './component/home-page/home-component.component';
import { HouseComponentComponent } from './component/house/house-component.component';
import { ProductComponent } from './component/product/product.component';
import { ProductDetailComponent } from './component/product/product-detail/product-detail.component';
import { TestComponent } from './test/test.component';
import { ProductDescComponent } from './component/product/product-detail/product-desc/product-desc.component';
import { ProductContactComponent } from './component/product/product-detail/product-contact/product-contact.component';
import { HouseDetailComponent } from './component/house/house-detail/house-detail.component';
import { HouseDescComponent } from './component/house/house-detail/house-desc/house-desc.component';
import { HouseContactComponent } from './component/house/house-detail/house-contact/house-contact.component';
import { BookComponent } from './component/book/book.component';
import { BookDetailComponent } from './component/book/book-detail/book-detail.component';
import { NewStudentsComponent } from './component/new-students/new-students.component';
import { SellComponent } from './component/sell/sell.component';
import { CodingComponent } from './coding/coding.component';
import { CallbackComponent } from './component/callback/callback.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AuthGuardService } from './Service/auth.guard.service';
import { SuccessComponent } from './component/success/success.component';
import { NotFoundComponent } from './component/not-found/not-found.component';


const appRouter: Routes = [
    { path: '', component: HomeComponentComponent },
    { path: 'sell', component: SellComponent },
    { path: 'editor', component: CodingComponent },
    { path: 'book-list', component: BookComponent },
    { path: 'book-list/:id', component: BookDetailComponent },
    { path: 'house-list', component: HouseComponentComponent },
    {
        path: 'house-list/:id', component: HouseDetailComponent, children: [
            { path: ':id/desc', component: HouseDescComponent },
            { path: ':id/contact', component: HouseContactComponent }
        ]
    },
    { path: 'product-list', component: ProductComponent },
    {
        path: 'product-list/:id', component: ProductDetailComponent, children: [
            { path: ':id/desc', component: ProductDescComponent },
            { path: ':id/contact', component: ProductContactComponent }
        ]
    },
    { path: 'test', component: TestComponent },
    { path: 'survival-guide', component: NewStudentsComponent },
    { path: 'callback', component: CallbackComponent },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuardService]
    },
    { path: 'success', component: SuccessComponent },
    { path: '**', component: NotFoundComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(appRouter)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
