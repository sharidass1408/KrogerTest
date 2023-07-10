import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {User} from "../../_models/user";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  users:User[]=[];
  constructor(private cartService:CartService) {
  }
  ngOnInit(): void {
    this.cartService.getCartProducts().subscribe(res=>{
            this.users =res;
    })
  }

}
