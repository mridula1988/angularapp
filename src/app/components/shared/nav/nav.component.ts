import { Component, OnInit } from '@angular/core';
import { MessangerService } from 'src/app/services/messanger.service';
import { Product } from 'src/app/models/product'; 


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  cartCount = 0;
  constructor(private msg : MessangerService) { }

  ngOnInit(): void {
    this.msg.getMessage().subscribe((product: Product) => {
      this.cartCount++;      
    });
  }
}
