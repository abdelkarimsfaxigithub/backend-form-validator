import { Injectable } from '@nestjs/common';
import * as form from './form.json';

@Injectable()
export class AppService {
  getForm() {
    return form;
  }
   
  handelForm(data){

    return true;
  }
}
