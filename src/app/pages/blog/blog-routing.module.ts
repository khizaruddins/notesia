import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogDetailComponent } from "./components/blog-detail/blog-detail.component";
import { BlogListComponent } from "./components/blog-list/blog-list.component";

const routes: Routes = [
    {
        path:'',
        component: BlogListComponent,
    },
    {
        path: ':id',
        component: BlogDetailComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule {}