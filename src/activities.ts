import { Injectable } from '@nestjs/common';
import { Activities, Activity } from 'nestjs-temporal';

@Activities()
@Injectable()
export class GreetingActivity {
  constructor() {}

  @Activity()
  public async greeting(name: string): Promise<string> {
    return 'Hello ' + name;
  }
}

export interface IGreetingActivity {
  greeting(name: string): Promise<string>;
}
