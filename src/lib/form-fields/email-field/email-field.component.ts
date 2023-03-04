import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { ValidationMessages } from '../../messages/validators.messages';
import { MxDefaultFieldComponent } from '../default-field/default-field.component';
import { MxField } from '../field.model';

/**
 * Component for displaying and editing numeric fields.
 * @example
 * // Set the configuration of the field.
 * const emailField: MxField.EMAIL = {
 *   id: 'email',
 *   label: 'Email',
 *   required: true,
 *   visible: true,
 * };
 * // Pass the configuration to the component.
 * <mx-email-field [field]="emailField"></mx-email-field>
 * @export
 * @class MxEmailFieldComponent
 * @extends {MxDefaultFieldComponent}
 */
@Component({
  selector: 'mx-email-field',
  exportAs: 'mxEmailField',
  templateUrl: '../default-field/default-field.component.html'
})
export class MxEmailFieldComponent extends MxDefaultFieldComponent {
  /**
   * Receives the email field configuration
   * @param {Partial<MxField.EMAIL>} field - The configuration of the `field` input property.
   * @param {string} [field.id] - The ID of the field.
   * @param {string} [field.label] - The label of the field.
   * @param {boolean} [field.required] - Whether the field is required or not.
   * @param {boolean} [field.visible] - Whether the field is visible or not.
   * @param {MxField.Type} [field.type=MxField.type.EMAIL] - The type of the field.
   * @param {MxField.Validation[]} [field.additionalValidations] - An array of additional validations for the field.
   */
  @Input() set field({
    type = MxField.type.EMAIL,
    additionalValidations = [],
    emailValidationMsg = ValidationMessages.EMAIL,
    ...field
  }: MxField.EMAIL) {
    additionalValidations = [
      ...additionalValidations,
      {
        validator: Validators.email,
        token: 'email',
        message: emailValidationMsg
      }
    ];
    this._field.next({ ...field, type, additionalValidations });
  }
  get field(): MxField.EMAIL {
    return this._field.getValue() as MxField.EMAIL;
  }
}
