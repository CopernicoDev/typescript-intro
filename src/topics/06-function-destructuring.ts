export interface Product {
    price: number;
    name: string;
}

const phone: Product = {
    price: 1000,
    name: 'iPhone 12'
}

const tablet: Product = {
    price: 2000,
    name: 'iPad'
}

const shoppingCart = [phone, tablet];

const tax = 0.15;

interface TaxCalculationOptions {
    products: Product[];
    tax: number;
}

export function taxCalculation({ products, tax }: TaxCalculationOptions): [number, number] {
    let total = 0;
    products.forEach(({ price }) => {
        total += price;
    });
    return [total, total * tax];
}

const result = taxCalculation({
    products: shoppingCart,
    tax
});

const [total, totalTax] = result;

console.log('Total de la compra:', total);
console.log('Total de impuestos:', totalTax);
