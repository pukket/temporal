import { proxyActivities } from '@temporalio/workflow';
// Only import the activity types
import { IGreetingActivity } from './activities';

const { greeting } = proxyActivities<IGreetingActivity>({
  startToCloseTimeout: '1 minute',
});

export async function example(name: string): Promise<string> {
  return await greeting(name);
}
