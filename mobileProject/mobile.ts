export class Mobile {
    private name: string;
    private trademark: string;
    private model: string;
    private color: string;
    private price: number;

    constructor(name: string, trademark: string, model: string, color: string, price: number) {
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }

    public getName(): string {
        return this.name;
    }

    public getTrademark(): string {
        return this.trademark;
    }

    public getModel(): string {
        return this.model;
    }

    public getColor(): string {
        return this.color;
    }

    public getPrice(): number {
        return this.price;
    }


    public setName(name: string): void {
        this.name = name;
    }

    public setTrademark(trademark: string): void {
        this.trademark = trademark;
    }

    public setModel(model: string): void {
        this.model = model;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public printCharacteristics(): void {
        console.log(`The characteristics of the mobile ${this.name} are:`);
        console.log(`Name: ${this.name}`);
        console.log(`Trademark: ${this.trademark}`);
        console.log(`Model: ${this.model}`);
        console.log(`Color: ${this.color}`);
        console.log(`Price: ${this.price}`);
    }
}


