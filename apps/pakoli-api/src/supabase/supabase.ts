import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SupabaseClient, createClient } from '@supabase/supabase-js';

// const options = {
//   db: {
//     schema: 'public',
//   },
//   auth: {
//     autoRefreshToken: true,
//     persistSession: true,
//     detectSessionInUrl: true,
//   },
//   global: {
//     headers: { 'x-my-custom-header': 'my-app-name' },
//   },
// };

@Injectable({})
export class Supabase {
  SUPABASE_URL = 'SUPABASE_URL';
  SUPABASE_ANON_KEY = 'SUPABASE_ANON_KEY';
  supabase: SupabaseClient;

  constructor(private configService: ConfigService) {
    const supabase_url = this.configService.get<string>(this.SUPABASE_URL);
    const supabase_key = this.configService.get<string>(this.SUPABASE_ANON_KEY);

    const supabase = createClient<any, any, any>(supabase_url, supabase_key);
    this.supabase = supabase;
  }

  async getAllProducts() {
    console.log('HITTT', this.SUPABASE_URL);
    const { data: products, error } = await this.supabase
      .from('products')
      .select('*');

    return products;
  }
}
