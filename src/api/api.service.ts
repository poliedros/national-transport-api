import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager-redis-store';

@Injectable()
export class ApiService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  get(): Promise<any> {
    return this.cacheManager.get('NATIONAL_TRANSPORT_DATA');
  }
}
