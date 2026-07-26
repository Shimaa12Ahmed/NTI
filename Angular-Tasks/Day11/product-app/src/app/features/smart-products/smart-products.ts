import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-smart-products',
  standalone: true,
 imports: [ CommonModule,FormsModule],
  templateUrl: './smart-products.html',
  styleUrl: './smart-products.css',
})
export class SmartProducts {

searchText = '';
status: 'loading' | 'success' | 'error' | 'idle' = 'idle';

products = [
{ id: 1, name: 'Wireless Mouse', price: 250, category: 'Accessories', inStock:
true },
{ id: 2, name: 'Mechanical Keyboard', price: 1200, category: 'Accessories',
inStock: true },
{ id: 3, name: 'USB-C Hub', price: 600, category: 'Accessories', inStock: false
},
{ id: 4, name: '27 Monitor', price: 4500, category: 'Displays', inStock: true },
];
initialProducts = structuredClone(this.products);
//methods
// ----------------------------------------------
setStatus(value: 'loading' | 'success' | 'error' | 'idle'): void {
  this.status = value;
}

get filteredProducts() {
const q = this.searchText.trim().toLowerCase();
if (!q) return this.products;
return this.products.filter(p => p.name.toLowerCase().includes(q));
}
clearProducts(): void {
    this.products = [];
  }

  resetProducts(): void {
    console.log(this.initialProducts);
   this.products=this.initialProducts;
  }


}
 