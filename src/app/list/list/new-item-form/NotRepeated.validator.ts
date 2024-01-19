import { AbstractControl, FormArray, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function NotRepeated(nameOfControl: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const fg = control.parent as FormGroup;
        if (!!fg) {
            const fa = fg.parent as FormArray;
            const value = control.value;
            const otherValues = fa.getRawValue().filter(row => row[nameOfControl] === value);
            const invalid = otherValues.length > 1;
            return invalid ? { invalid: { value: control.value } } : null;
        }
        return null;
    }
}