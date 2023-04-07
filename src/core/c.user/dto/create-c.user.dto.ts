import { ApiProperty } from '@nestjs/swagger';
import { Gender, Role } from '@prisma/client';
import {
  IsBoolean,
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateCUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsString()
  @IsEmpty()
  phone: string;

  @ApiProperty()
  @IsString()
  @IsEmpty()
  gender: Gender;

  @ApiProperty()
  @IsBoolean()
  @IsEmpty()
  isActive: boolean;

  @ApiProperty()
  @IsNumber()
  @IsEmpty()
  profileImgId: number;

  @ApiProperty()
  @IsString()
  @IsEmpty()
  role: Role;
}
