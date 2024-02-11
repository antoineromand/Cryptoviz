import { Module } from '@nestjs/common';
import { DataController } from '@/apps/data/src/data.controller';
import { DatabaseService } from '@/apps/data/src/database/database.service';
import { EventsModule } from '@/apps/data/src/events/events.module';
import { DatabaseModule } from '@/apps/data/src/database/database.module';
import { DatabaseConfigModule } from '@/apps/data/src/database/database-config.module';

@Module({
    imports: [DatabaseConfigModule, EventsModule, DatabaseModule],
    controllers: [DataController],
    providers: [DatabaseService]
})
export class DataModule {}
