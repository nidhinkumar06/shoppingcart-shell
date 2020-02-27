import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoHome() {
    console.log('goto home got called');
    this.router.navigate(['/home']);
  }

  gotoAddProduct() {
    this.router.navigate(['/home/product/add-product']);
  }

  gotoOrder() {
    this.router.navigate(['/home/order']);
  }

  logOut() {
    this.router.navigate(['']);
  }

}
