import { ValidatorFn } from '@angular/forms';
import { MxCheckboxField } from './checkbox-field/checkbox-field.model';
import { MxDateField } from './date-field/date-field.model';
import { MxEmailField } from './email-field/email-field.model';
import { MxLevelField } from './level-field/level-field.model';
import { MxNumberField } from './number-field/number-field.model';
import { MxPasswordField } from './password-field/password-field.model';
import { PasswordValidations } from './password-field/password-validation.model';
import { MxPhoneField } from './phone-field/phone-field.model';
import { MxRadioField } from './radio-field/radio-field.model';
import { MxSelectField } from './select-field/select-field.model';
import { MxTextField } from './text-field/text-field.model';
import { MxTextareaField } from './textarea-field/textarea-field.model';

/**
 * The MxField interface defines the properties of a field used in the application
 * @interface MxField
 * @property {string} id - The unique identifier of the field.
 * @property {string} label - The label of the field.
 * @property {string} type - The type of field.
 * @property {string} placeholder - Defines the placeholder
 * @property {string} info -  Explains the information about the field
 * @property {boolean} required - A flag indicating whether the field is required or not.
 * @property {boolean} [disable=false] Whether the field is disable or enable
 * @property {boolean} visible - A flag indicating whether the field is visible or not.
 * @property {any[]} additionalValidations - An array of additional validations for the field.
 */
export interface MxField {
  id: string;
  label: string;
  type: MxField.type;
  placeholder?: string;
  info?: string;
  required: boolean;
  disable: boolean;
  visible: boolean;
  additionalValidations?: MxField.validation[];
}

export namespace MxField {
  export enum type {
    TEXT = 'text',
    EMAIL = 'email',
    PASSWORD = 'password',
    PHONE = 'tel',
    NUMBER = 'number',
    TEXTAREA = 'textarea',
    SELECT = 'select',
    RADIO = 'radio',
    MULTIPLE = 'multiple',
    CHECKBOX = 'checkbox',
    SWITCH = 'switch',
    RANGE = 'range',
    LEVEL = 'level',
    DATE = 'date',
    TIME = 'time',
    FILE = 'file'
  }

  export type TEXT = MxTextField;
  export type NUMBER = MxNumberField;
  export type EMAIL = MxEmailField;
  export type PASSWORD = MxPasswordField;
  export type PHONE = MxPhoneField;
  export type TEXTAREA = MxTextareaField;
  export type SELECT = MxSelectField;
  export type RADIO = MxRadioField;
  export type CHECKBOX = MxCheckboxField;
  export type LEVEL = MxLevelField;
  export type DATE = MxDateField;

  export type reference = Pick<MxField, 'id' | 'label' | 'visible'>;

  export type forAll =
    | MxField
    | TEXT
    | NUMBER
    | EMAIL
    | PASSWORD
    | TEXTAREA
    | SELECT
    | RADIO
    | CHECKBOX
    | LEVEL
    | DATE;

  export interface validation {
    validator: ValidatorFn;
    token: string;
    message: string;
  }

  export namespace validationTypes {
    export type PASSWORD = PasswordValidations;
  }

  /**
   * Defines an option item for the field
   *
   * @property {string} value The value of the option. Recommended use as simple value as can
   * @property {string} label The label to display the value of the option. Recommended use as explicit as can
   * @export
   * @interface option
   */
  export interface option {
    value: any;
    label: string;
  }
  /**
   * Group of options for the field
   * @property {string} name Name of the group
   * @property {MxSelectField.option[]} options List of options of the group
   *
   * @export
   * @interface group
   */
  export interface optionGroup {
    name: string;
    options: option[];
  }
  export type options = option[] | optionGroup[];
}
