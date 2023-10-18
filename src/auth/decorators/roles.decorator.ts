import { Role } from '@auth/enums/role.enum';
import { SetMetadata } from '@nestjs/common';
export const ROLES_KEY = 'roles';
export const Roles = (role: Role) => SetMetadata(ROLES_KEY, role);
