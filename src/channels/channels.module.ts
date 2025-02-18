import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ChannelsController } from './channels.controller';
import { ChannelsService } from './channels.service';
import { Channels } from 'src/entities/Channels';
import { ChannelMembers } from 'src/entities/ChannelMembers';
import { ChannelChats } from 'src/entities/ChannelChats';
import { Users } from 'src/entities/Users';
import { Workspaces } from 'src/entities/Workspaces';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Channels,
      ChannelMembers,
      ChannelChats,
      Users,
      Workspaces,
    ]),
  ],
  controllers: [ChannelsController],
  providers: [ChannelsService],
})
export class ChannelsModule {}
