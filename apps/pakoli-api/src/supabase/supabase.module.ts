import { Module } from '@nestjs/common';
import { Supabase as SupabaseProvider } from './supabase';

@Module({
  exports: [SupabaseProvider],
  providers: [SupabaseProvider],
})
export class SupabaseModule {}
