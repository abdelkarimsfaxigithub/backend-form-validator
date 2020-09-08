import { Injectable } from '@nestjs/common';
import * as form from './form.json';
import * as moment from 'moment';

@Injectable()
export class AppService {
  getForm() {
    return form;
  }

  handelForm(data) {
    const error = [];
    if (data && Object.keys(data).length) {
      form.fieldsui.forEach(el => {
        if (el.xtype !== 'button' && el.mandatory) {
          if (!data[el.name]) {
            error.push(`${el.label} is required`);
          } else if (data[el.name]) {
            if (el.xtype === 'number') {
              if (parseInt(data[el.name]) === NaN) {
                error.push(`${el.label} must be integer`);
              } else if (parseInt(data[el.name]) > parseInt(el.maxvalue)) {
                error.push(`${el.label} must be less than ${el.maxvalue}`);
              } else if (parseInt(data[el.name]) <= 0) {
                error.push(`${el.label} must be greater than 0`);
              }
            } else if (el.xtype === 'text' && data[el.name].length < 3) {
              error.push(`field length of ${el.label} must be greater than 3.`);
            } else if (el.xtype === 'date' && data[el.name]) {
              const date = moment(data[el.name]);
              if (!date.isValid) error.push(`Date format is not valid.`);
            }
          }
        }
      });
    } else {
      error.push('You must fill all the fields. ');
    }
    return error.length
      ? { isValid: false, error }
      : { isValid: true, redirectionUrl: form.redirection };
  }
}
