import { Injectable } from '@nestjs/common';
import { CreateCAuthDto } from './dto/create-c.auth.dto';
import { UpdateCAuthDto } from './dto/update-c.auth.dto';

@Injectable()
export class CAuthService {
  create(createCAuthDto: CreateCAuthDto) {
    return 'This action adds a new cAuth';
  }

  findAll() {
    return `This action returns all cAuth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cAuth`;
  }

  update(id: number, updateCAuthDto: UpdateCAuthDto) {
    return `This action updates a #${id} cAuth`;
  }

  remove(id: number) {
    return `This action removes a #${id} cAuth`;
  }
}
