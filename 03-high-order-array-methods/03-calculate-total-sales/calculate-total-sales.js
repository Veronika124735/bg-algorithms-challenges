function calculateTotalSalesWithTax(products, taxRate) {
    const total = products.reduce((sum, p) => sum + p.price *
     p.quantity, 0);
     return Number((total * (1 + taxRate / 100)).toFixed(2));
   }

module.exports = calculateTotalSalesWithTax;
