import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CAuthService } from './c.auth.service';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CUserEntity } from '../c.user/entities/c.user.entity';
import { HttpUtils } from 'src/libs/core/utils/http.utils';
import { CreateCUserDto } from '../c.user/dto/create-c.user.dto';
import { EmailLoginDto } from './dto/email.login.dto';
import { Role } from '@prisma/client';

@ApiTags('Auth Module')
@Controller('c.auth')
export class CAuthController {
  constructor(private readonly cAuthService: CAuthService) {}

  @ApiOperation({ summary: '이메일 회원가입' })
  @ApiCreatedResponse({ type: CUserEntity })
  @Post('/join/email')
  async joinEmail(@Body() createJoinDto: CreateCUserDto) {
    const res = await this.cAuthService.joinEmail(createJoinDto);
    return await HttpUtils.makeAPIResponse(true, res);
  }

  @ApiOperation({ summary: '이메일 로그인' })
  @ApiCreatedResponse({ type: CUserEntity })
  @Post('/login/email')
  async loginEmail(@Body() emailLoginDto: EmailLoginDto) {
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
