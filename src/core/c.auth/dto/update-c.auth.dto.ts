import { PartialType } from '@nestjs/swagger';
import { CreateCAuthDto } from './create-c.auth.dto';

export class UpdateCAuthDto extends PartialType(CreateCAuthDto) {}
