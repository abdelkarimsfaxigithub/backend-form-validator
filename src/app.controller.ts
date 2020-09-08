import { Controller, Get, Res, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get/form')
  getForm(@Res() res: Response) {
    const result = this.appService.getForm();
    return res.status(200).json(result);
  }

  @Post('/validator')
  handelForm(@Body() body: any, @Res() res: Response) {
    const result = this.appService.handelForm(body);
  }
}
