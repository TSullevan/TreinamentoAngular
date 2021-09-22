export class Product {
    name: string = 'ParkinPadara';
    price: number | string = 9.99;
    source: string = 'assets/images/defaultImage.jpg';

    public asGlasses(): Product {
        this.name = 'Òculos bacana';
        this.price = 199.99;
        this.source = 'assets/images/glasses.jpg';
        return this;
    }

    public asShoes(): Product {
        this.name = 'Bota daora';
        this.price = 599.99;
        this.source = 'assets/images/shoes.jpg';
        return this;
    }

    public asIphone13(): Product {
        this.name = 'Iphone do Zega';
        this.price = 15990.00;
        this.source = 'assets/images/iphone13.png';
        return this;
    }
}