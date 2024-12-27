import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor(
        @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger
    ) {
        super({
            log: [
                { emit: 'event', level: 'info' },
                { emit: 'event', level: 'warn' },
                { emit: 'event', level: 'error' },
                { emit: 'event', level: 'query' }
            ],
        });
    }

    async onModuleInit() {
        // Setup event listeners for different log levels
        this.setupLogEventListeners();
    }

    private setupLogEventListeners(): void {
        type PrismaLogEvent = 'info' | 'warn' | 'error' | 'query';
        const logEvents: PrismaLogEvent[] = ['info', 'warn', 'error', 'query'];
        
        logEvents.forEach((level: PrismaLogEvent) => {
            this.$on(level as never, (event) => {
                if (level === 'query') {
                    this.logger.info(event);
                } else {
                    const logLevel = level as keyof Logger;
                    this.logger[logLevel](event);
                }
            });
        });
    }
}

