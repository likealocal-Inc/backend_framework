import { Controller, Post, Body, CacheTTL, Logger } from '@nestjs/common';
import { CAuthService } from './c.auth.service';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CUserEntity } from '../c.user/entities/c.user.entity';
import { APIResponseObj, HttpUtils } from 'src/libs/core/utils/http.utils';
import { CreateCUserDto } from '../c.user/dto/create-c.user.dto';
import { EmailLoginDto } from './dto/email.login.dto';
import { Role } from '@prisma/client';
import { CacheKey } from '@nestjs/cache-manager';
import { CronJob } from 'cron';
import { SchedulerRegistry } from '@nestjs/schedule';
import { DefaultConfig } from 'src/config/default.config';

@ApiBearerAuth()
@ApiTags('Auth Module')
@Controller('c.auth')
export class CAuthController {
  private readonly logger = new Logger(CAuthController.name);

  constructor(
    private readonly cAuthService: CAuthService,
    private readonly schduleRegistry: SchedulerRegistry,
  ) {}

  @ApiOperation({ summary: '이메일 회원가입' })
  @ApiCreatedResponse({ type: CUserEntity })
  @Post('/join/email')
  async joinEmail(
    @Body() createJoinDto: CreateCUserDto,
  ): Promise<APIResponseObj> {
    const res = await this.cAuthService.joinEmail(createJoinDto);
    return await HttpUtils.makeAPIResponse(true, res);
  }

  @ApiOperation({ summary: '이메일 로그인' })
  @ApiCreatedResponse({ type: CUserEntity })
  @Post('/login/email')
  async loginEmail(
    @Body() emailLoginDto: EmailLoginDto,
  ): Promise<APIResponseObj> {
    const job: CronJob = this.schduleRegistry.getCronJob(
      DefaultConfig.schedule.jobName.job2,
    );
    job.start();

    return await HttpUtils.makeAPIResponse(
      true,
      await this.cAuthService.loginEmail(emailLoginDto, [Role.USER]),
    );
  }

  // @ApiOperation({ summary: 'SNS 회원가입' })
  // @ApiCreatedResponse({ type: CUserEntity })
  // @Post('/join/sns')
  // async joinSns(@Body() createJoinDto: CreateJoinEmailDto) {
  //   return this.cAuthService.join(createJoinDto);
  // }
}
