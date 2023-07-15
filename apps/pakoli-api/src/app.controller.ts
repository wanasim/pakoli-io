import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Supabase } from './supabase/supabase';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly supabaseService: Supabase,
  ) {}

  @Get('/products')
  getAllProducts(): any {
    return this.supabaseService.getAllProducts();
  }
}
