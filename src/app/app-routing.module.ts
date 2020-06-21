import { NgModule, Input } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TestCompComponent } from "./test-comp/test-comp.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "test", component: TestCompComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
