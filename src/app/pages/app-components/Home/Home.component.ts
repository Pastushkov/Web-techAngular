import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-Home",
  templateUrl: "./Home.component.html",
  styleUrls: ["./Home.component.css"],
})
export class HomeComponent implements OnInit {
  cards: any[] = [
    {
      title: "Users List",
      content: "List of all users in system",
      path: "userslist",
    },
  ];
  constructor() {}
  ngOnInit() {}
}
