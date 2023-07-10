import {Component, OnInit} from '@angular/core';
import {User} from "../../_models/user";
import {CartService} from "../../services/cart.service";
import {Product} from "../../_models/product";

@Component({
  selector: 'app-add-new-cart',
  templateUrl: './add-new-cart.component.html',
  styleUrls: ['./add-new-cart.component.css']
})
export class AddNewCartComponent implements OnInit{
  products:Product[]=[];
  userCart:any;
  userId: number=0;
  productId: number=0;
  quantity: number=0;
  constructor(private cartService:CartService) {
  }
  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.products =res;
    })
  }

  addCart() {
    this.userCart ={
      userId:this.userId,
      products:[
        {
          productId:this.productId,
          quantity:this.quantity
        }
      ]
    }
    this.cartService.addProductToCart( this.userCart).subscribe(res=>{
    alert("Product Added");
    this.userId =0;
    this.quantity=0;
    this.productId=0;
    })
  }
}
