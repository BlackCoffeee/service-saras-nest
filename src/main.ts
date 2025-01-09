import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { AppConfigService } from './config/config.service';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const config = app.get(AppConfigService);
    const logger = new Logger('Bootstrap');

    // Global prefix
    app.setGlobalPrefix('api');
    
    // Enable CORS
    app.enableCors();

    await app.listen(config.port);
    
    logger.log(`Application is running in ${config.nodeEnv} mode`);
    logger.log(`Server is running on: ${await app.getUrl()}`);
    
    if (config.nodeEnv === 'development') {
        logger.log(`OAuth Verify Token URL: ${config.oauthVerifyTokenUrl}`);
    }
}

bootstrap();
