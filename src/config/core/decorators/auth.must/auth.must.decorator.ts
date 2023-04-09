import { SetMetadata } from '@nestjs/common';
import { Role } from '@prisma/client';

export const AUTH_MUST_KEY = 'AUTH_MUST_KEY';
export const MUST_AUTH = (role: Role = Role.USER) =>
  SetMetadata(AUTH_MUST_KEY, role);
