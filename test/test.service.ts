import { Injectable } from "@nestjs/common";
import { PrismaService } from "../src/common/prisma.service";

@Injectable()
export class TestService {
    constructor(private prismaService: PrismaService) {}

}