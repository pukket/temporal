import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemporalModule } from 'nestjs-temporal';
import { GreetingActivity } from './activities';
console.log("test ............");
console.log(require.resolve('./workflow'));
@Module({
  imports: [
    TemporalModule.registerWorker({
      workerOptions: {
        taskQueue: 'default',
        workflowsPath: require.resolve('./workflow'),
      },
    }),

    TemporalModule.registerClient(),
  ],
  controllers: [AppController],
  providers: [AppService, GreetingActivity],
})
export class AppModule {}
