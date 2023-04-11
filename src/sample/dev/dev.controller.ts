import { Controller, Get } from '@nestjs/common';
import { DevService } from './dev.service';

@Controller('dev')
export class DevController {
  constructor(private readonly devService: DevService) {}

  // @Post()
  // create(@Body() createDevDto: CreateDevDto) {
  //   return this.devService.create(createDevDto);
  // }

  @Get('send')
  async send() {
    return await this.devService.send();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.devService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDevDto: UpdateDevDto) {
  //   return this.devService.update(+id, updateDevDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.devService.remove(+id);
  // }
}
