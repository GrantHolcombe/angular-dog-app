import { Component, OnInit } from "@angular/core";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from "@angular/cdk/layout";

@Component({
  selector: "app-test-comp",
  templateUrl: "./test-comp.component.html",
  styleUrls: ["./test-comp.component.scss"],
})
export class TestCompComponent implements OnInit {
  list = [];
  msg = "";
  newDog = "";
  dogDetail = {
    breed: "",
    detail: "",
  };
  grid = 2;

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.Small])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log("Matches small viewport");
          this.grid = 1;
        }
      });
    this.breakpointObserver
      .observe([Breakpoints.Medium])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log("Matches medium viewport");
          this.grid = 2;
        }
      });
  }

  update(): void {
    this.list.push(this.newDog);
  }
  onKey(value: any) {
    this.newDog = value;
  }

  onEnter = async (): Promise<void> => {
    this.update();

    const data = await fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        name: this.newDog,
      }),
    });
    const json = await data.json();
    console.log(json);

    this.msg = json.data;
    this.newDog = "";
  };

  rm(i: number): void {
    console.log(i);
    this.list.splice(i, 1);
  }

  onClick(breed: string): void {
    switch (breed.toLowerCase()) {
      case "corgi":
        this.dogDetail = {
          breed,
          detail:
            "Big time sheaders because of their dual coats. Very cute though!",
        };
        break;

      case "beagle":
        this.dogDetail = {
          breed,
          detail:
            "My first dog was a beagle. They are known as the kindest of all dogs, great with kids.",
        };
        break;

      default:
        this.dogDetail = {
          breed,
          detail: "We dont have any info on that type of dog",
        };
        break;
    }
  }
}
