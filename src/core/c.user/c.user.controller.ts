import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { CUserService } from './c.user.service';
import { CreateCUserDto } from './dto/create-c.user.dto';
import { UpdateCUserDto } from './dto/update-c.user.dto';
import { APIResponseObj, HttpUtils } from 'src/libs/core/utils/http.utils';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CUserEntity } from './entities/c.user.entity';
import { CustomException } from 'src/config/core/exceptions/custom.exception';
import { ExceptionCodeList } from 'src/config/core/exceptions/exception.code';

/**
 * 사용자
 */
@ApiTags('User Module')
@Controller('c.user')
export class CUserController {
  constructor(private readonly cUserService: CUserService) {}

  @Get()
  async test() {
    throw new CustomException(
      ExceptionCodeList.COMMON.WRONG_REQUEST,
      HttpStatus.BAD_REQUEST,
    );
  }

  @Post()
  @ApiCreatedResponse({ type: CUserEntity, isArray: false })
  async create(
    @Body() createCUserDto: CreateCUserDto,
  ): Promise<APIResponseObj> {
    try {
      const res = await this.cUserService.create(createCUserDto);
      console.log(res);
      console.log('$$$');
      return HttpUtils.makeAPIResponse(true, res);
    } catch (err) {}
  }

  @Get()
  @ApiCreatedResponse({ type: CUserEntity, isArray: true })
  async findAll(): Promise<APIResponseObj> {
    return HttpUtils.makeAPIResponse(true, this.cUserService.findAll());
  }

  @Get(':id')
  @ApiCreatedResponse({ type: CUserEntity, isArray: false })
  async findOne(@Param('id') id: string): Promise<APIResponseObj> {
    return HttpUtils.makeAPIResponse(true, this.cUserService.findOne(+id));
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: CUserEntity, isArray: false })
  async update(
    @Param('id') id: string,
    @Body() updateCUserDto: UpdateCUserDto,
  ): Promise<APIResponseObj> {
    return HttpUtils.makeAPIResponse(
      true,
      this.cUserService.update(+id, updateCUserDto),
    );
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: CUserEntity, isArray: false })
  async remove(@Param('id') id: string): Promise<APIResponseObj> {
    return HttpUtils.makeAPIResponse(true, this.cUserService.remove(+id));
  }
}
