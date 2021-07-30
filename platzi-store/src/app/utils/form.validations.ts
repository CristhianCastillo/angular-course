import { AbstractControl } from '@angular/forms';

export class FormValidations {
  static isPriceValid(control: AbstractControl) {
    const values = control.value;
    if (values > 10000) {
      return { price_invalid: true };
    }
    return null;
  }
}
