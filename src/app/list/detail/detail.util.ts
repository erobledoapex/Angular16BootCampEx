export class DetailUtil {
    static getOfferPrice(price: number = 0, discount?: number): number {
        if (!!discount) {
            return price * (1 - ((discount) / 100));
        }
        return price;
    }
}