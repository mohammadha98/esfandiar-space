import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { VcComponent } from './vc/vc.component';
import { PapersComponent } from './papers/papers.component';
import { GalleryComponent } from './gallery/gallery.component';
import { VideosComponent } from './videos/videos.component';

export const routes: Routes = [
    {path:'',component:MainComponent,children:[
        {path:'about-me',component:AboutMeComponent},
        {path:'cv',component:VcComponent},
        {path:'papers',component:PapersComponent},
        {path:'videos',component:VideosComponent},
        {path:'gallery',component:GalleryComponent},

        { path: '', redirectTo: 'about-me', pathMatch: 'full' }
    ]},
    { path: '**', redirectTo: 'about-me', pathMatch: 'full' }
];
