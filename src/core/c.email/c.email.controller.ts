import { Controller } from '@nestjs/common';
import { CEmailService as CEmailService } from './c.email.service';

@Controller('c.email')
export class CEmailController {
  constructor(private readonly cEamilService: CEmailService) {}
}
