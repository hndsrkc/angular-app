import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public year: number | undefined;
  public ref: string;

  constructor(private router: RouterModule) { }


  ngOnInit(): void {
    this.year = new Date().getFullYear();
    this.ref = "https://powo.science.kew.org/";
  }

}