import { AbstractControl } from '@angular/forms';

export class CustomValidator {
   static userNameValidator(
    control: AbstractControl
  ): { [key: string]: any } | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return {shouldNotHaveSpaces: true}
  }
  else{
      return null
  }
}
}
