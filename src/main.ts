import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const logger = new Logger('Bootstrap');

    // Hapus 'api' dari controller dan gunakan global prefix
    app.setGlobalPrefix('api');
    
    // Enable CORS
    app.enableCors();

    const port = process.env.PORT || 3000;
    await app.listen(port);
    
    logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
