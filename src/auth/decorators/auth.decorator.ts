import { Role } from "@auth/enums/role.enum";
import { UseGuards, applyDecorators } from "@nestjs/common";
import { Roles } from "./roles.decorator";
import { RolesGuard } from "@auth/guards/roles.guard";
import { AuthGuard } from "@auth/guards/auth.guard";

export function Auth(role: Role) {
  return applyDecorators(
    Roles(role),
    UseGuards(AuthGuard, RolesGuard)
  );
};
