import { Injectable } from '@nestjs/common';
import { CreateCUserDto } from './dto/create-c.user.dto';
import { UpdateCUserDto } from './dto/update-c.user.dto';
import { CUserEntity } from './entities/c.user.entity';
import { PrismaService } from 'src/config/core/prisma/prisma.service';

@Injectable()
export class CUserService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createCUserDto: CreateCUserDto): Promise<CUserEntity> {
    return await this.prisma.user.create({ data: createCUserDto });
  }

  async findAll(): Promise<CUserEntity[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<CUserEntity> {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async update(
    id: number,
    updateCUserDto: UpdateCUserDto,
  ): Promise<CUserEntity> {
    return await this.prisma.user.update({
      where: { id },
      data: updateCUserDto,
    });
  }

  async remove(id: number): Promise<CUserEntity> {
    return await this.prisma.user.delete({ where: { id } });
  }
}
