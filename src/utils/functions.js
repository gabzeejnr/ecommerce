export function toFix(number) {
    return `$${number.toFixed(2)}`
}

const testData = [
    {
        price: 100,
        quantity: 2
    },
    {
        price: 50,
        quantity: 4
    },
    {
        price: 20,
        quantity: 5
    },
    {
        price: 20,
        quantity: 5
    }
]

export function sumCart(cart) {
    let initialArray = [];
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        const product = element.price * element.quantity;
        initialArray.push(product);
    };

    let sum = 0
    for (let i = 0; i < initialArray.length; i++) {
        const element = initialArray[i];
        sum += Number(element);
    };

    return sum;
}

console.log(sumCart(testData))