import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-child-test",
  templateUrl: "./child-test.component.html",
  styleUrls: ["./child-test.component.scss"],
})
export class ChildTestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    console.log("yeeeeeet");
    this.detail = { breed: "", detail: "" };
  }

  @Input() detail: { breed: string; detail: string };
}
