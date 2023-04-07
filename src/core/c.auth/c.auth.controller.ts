import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CAuthService } from './c.auth.service';
import { CreateCAuthDto } from './dto/create-c.auth.dto';
import { UpdateCAuthDto } from './dto/update-c.auth.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth Module')
@Controller('c.auth')
export class CAuthController {
  constructor(private readonly cAuthService: CAuthService) {}

  @Post()
  create(@Body() createCAuthDto: CreateCAuthDto) {
    return this.cAuthService.create(createCAuthDto);
  }

  @Get()
  findAll() {
    return this.cAuthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cAuthService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCAuthDto: UpdateCAuthDto) {
    return this.cAuthService.update(+id, updateCAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cAuthService.remove(+id);
  }
}
