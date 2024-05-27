import { Controller, Get } from '@nestjs/common';
import { InjectTemporalClient } from 'nestjs-temporal';
import { WorkflowClient } from '@temporalio/client';

@Controller()
export class AppController {
  constructor(
    @InjectTemporalClient() private readonly temporalClient: WorkflowClient,
  ) {}

  @Get()
  async greeting() {
    const handle = await this.temporalClient.start('example', {
      args: ['Temporal'],
      taskQueue: 'default',
      workflowId: 'wf-id-' + Math.floor(Math.random() * 1000),
    });
    console.log(`Started workflow ${handle.workflowId}`);
  }
}
