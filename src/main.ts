import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  console.log(`Listening on http://localhost:${port}`);

  const config = new DocumentBuilder()
    .setTitle('Sleact API')
    .setDescription('Sleact API document')
    .setVersion('1.0')
    .addCookieAuth('connect.sid')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  await app.listen(port);
}
bootstrap();
