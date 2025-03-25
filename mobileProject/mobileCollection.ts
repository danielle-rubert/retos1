class Mobile {
    constructor(
        private name: string,
        private brand: string,
        private price: number
    ) {}

    public getName(): string {
        return this.name;
    }

    public getBrand(): string {
        return this.brand;
    }

    public getPrice(): number {
        return this.price;
    }
}

export class MobileCollection {
    private mobiles: Mobile[];
    private totalPrice: number;

    constructor(mobiles: Mobile[]) {
        this.mobiles = mobiles;
        this.totalPrice = this.calculateTotalPrice();
    }

    public getMobiles(): Mobile[] {
        return this.mobiles;
    }

    public setMobiles(mobiles: Mobile[]): void {
        this.mobiles = mobiles;
        this.totalPrice = this.calculateTotalPrice();
    }

    public getTotalPrice(): number {
        return this.totalPrice;
    }

    private calculateTotalPrice(): number {
        return this.mobiles.reduce((sum, mobile) => sum + mobile.getPrice(), 0);
    }
}
