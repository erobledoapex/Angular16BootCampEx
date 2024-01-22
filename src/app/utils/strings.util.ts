export class StringsUtil {
    static capitalize(t: string): string {
        return t.charAt(0).toUpperCase() + t.slice(1);
    }
}