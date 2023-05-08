import { AbstractControl } from "@angular/forms";

export class MatchValidator {
    static matchValidator(fieldToMatch: string) {
        return (control: AbstractControl): { [key: string]: any } | null => {
          if (control.parent) {
          const field = control.parent.get(fieldToMatch);
          if (field && control.value !== field.value) {
            return { match: true };
          }
        }
          return null;
        };
      }
  }
  