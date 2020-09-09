import { Controller, Get, Res, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('v1/get/form')
  getFormV1(@Res() res: Response) {
    const result = this.appService.getFormV1();
    return res.status(200).json(result);
  }

  @Get('v2/get/form')
  getFormV2(@Res() res: Response) {
    const result = this.appService.getFormV2();
    return res.status(200).json(result);
  }

  @Post('check/data')
  handelForm(@Body() body: any, @Res() res: Response) {
    const result = this.appService.handelForm(body);
    return res.status(200).json(result);
  }
}
