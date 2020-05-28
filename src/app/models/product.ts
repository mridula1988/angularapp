export class Product {
    id: number;
    categoryId: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id, categoryId, name, description, price, imageUrl) {
        this.id = id;
        this.categoryId = categoryId;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}
