import { ZodType } from 'zod';
import { z } from 'zod';
export class EdificesValidation {
    static readonly CREATE: ZodType = z.object({
        buildingName: z.string().min(3).max(50),
        buildingDesc: z.string().min(3).max(255).optional(),
        buildingAddress: z.string().min(3).max(255).optional(),
    });
}
