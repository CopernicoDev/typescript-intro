import type { Product } from './06-function-destructuring';
import { taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        name: 'iPhone 12',
        price: 1000
    },
    {
        name: 'iPad',
        price: 2000
    }
];

const [total, totalTax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log(total);
console.log(totalTax);

