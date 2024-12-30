import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, Logger } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/common/prisma.service';
import { faker } from '@faker-js/faker';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

describe('EdificeController', () => {
    let app: INestApplication;
    let prismaService: PrismaService;
    let logger: Logger;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
        logger = app.get(WINSTON_MODULE_PROVIDER)
        prismaService = moduleFixture.get<PrismaService>(PrismaService);
    });
    
    describe('GET /api/edifices', () => {
        it('should return 200 ok', async () => {
            const response = await request(app.getHttpServer())
                .get('/api/edifices')
                .expect(200);
            logger.warn(response.body);
            expect(response.status).toBe(200);
        });

        it('should return 204 if no edifice data', async () => {
            const response = await request(app.getHttpServer())
                .get('/api/edifices')
                .expect(204);
            logger.warn(response.body);
            expect(response.status).toBe(204);
        });

        it('should return 200 ok with edifice data', async () => {
            const response = await request(app.getHttpServer())
                .get('/api/edifices')
                .expect(200);
            logger.warn(response.body);
            expect(response.status).toBe(200);
            expect(response.body.data).toBeDefined();
            expect(response.body.data.length).toBeGreaterThan(0);
        });
    });

    describe('POST /api/edifices', () => {
        
        it('should be rejected if request is invalid', async () => {
            const response = await request(app.getHttpServer())
                .post('/api/edifices')
                .send({
                    buildingName: '',
                    buildingDesc: '',
                    buildingAddress: '',
                })
                .expect(400);
            logger.error(response.body);
            expect(response.status).toBe(400);
            expect(response.body.error).toBeDefined();
        });

        it('should be rejected if building name is empty', async () => {
            const response = await request(app.getHttpServer())
                .post('/api/edifices')
                .send({
                    buildingName: '',
                    buildingDesc: faker.lorem.sentence(),
                    buildingAddress: faker.location.streetAddress(),
                })
                .expect(400);
            logger.error(response.body);
            expect(response.status).toBe(400);
            expect(response.body.error).toBeDefined();
        });

        it('should return 201 created', async () => {
            const edificeData = {
                buildingName: 'test-'+faker.company.name(),
                buildingDesc: 'test-'+faker.lorem.sentence(),
                buildingAddress: 'test-'+faker.location.streetAddress(),
            };

            const response = await request(app.getHttpServer())
                .post('/api/edifices')
                .send(edificeData)
                .expect(201);
            logger.warn(response.body);
            expect(response.status).toBe(201);
        });
    });

    
});