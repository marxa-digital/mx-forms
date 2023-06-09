import { Component, Input } from '@angular/core';
import { MxDefaultFieldComponent } from '../default-field/default-field.component';
import { MxField } from '../field.model';
import { MxTextField } from './text-field.model';

/**
 * Component for displaying and editing numeric fields.
 * @example
 * // Set the configuration of the field.
 * const numberField: Partial<MxField.NUMBER> = {
 *   id: 'age',
 *   label: 'Age',
 *   required: true,
 *   visible: true,
 *   additionalValidations: [
 *     { type: MxField.ValidationType.MIN_VALUE, value: 0 },
 *     { type: MxField.ValidationType.MAX_VALUE, value: 150 }
 *   ]
 * };
 * // Pass the configuration to the component.
 * <mx-number-field [field]="numberField"></mx-number-field>
 * @export
 * @class MxTextFieldComponent
 * @extends {MxDefaultFieldComponent}
 */
@Component({
  selector: 'mx-text-field',
  exportAs: 'mxTextField',
  templateUrl: 'text-field.component.html'
})
export class MxTextFieldComponent extends MxDefaultFieldComponent {
  @Input() set field(field: MxField.TEXT) {
    const defaultProperties = new MxTextField('', '');
    this._field.next({ ...defaultProperties, ...field });
  }
}
