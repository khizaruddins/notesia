import { MatFormFieldAppearance } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";

export interface IInputConfig {
    type: string;
    label?: string;
    placeholder: string;
    errors: {
        required: string;
        pattern: string;
        minLength: string;
    };
    appearance: MatFormFieldAppearance;
    hint?: string;
    matSuffixIcon?: string;
    matPrefixIcon?: string;
    suffixContent?: string;
    prefixContent?: string;
    classes?: {
      formFieldClass?: string;
      inputClass?: string;
      inputWrapperClass?: string;
      matSuffixIconClass?: string;
    }
}