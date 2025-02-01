import type { TConfig } from "@/app/modules/config";
import { HttpStatus, type INestApplication, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import * as compression from "compression";
import helmet from "helmet";
import { AppModule } from "./app/app.module";

async function bootstrap() {
	const logger = new Logger("Bootstrap");
	const app = await NestFactory.create<INestApplication>(AppModule);
	// cofiguration //
	const configService = app.get<ConfigService<TConfig>>(ConfigService);
	const httpPort = configService.getOrThrow<number>("HTTP_PORT");
	const corsOrgins = configService.getOrThrow<string[]>("ORIGINS");

	// security //
	app.use(helmet());

	// compression //
	app.use(compression());

	// cors //
	app.enableCors({
		origin: corsOrgins,
		methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
		credentials: true,
		optionsSuccessStatus: HttpStatus.NO_CONTENT,
	});

	await app.listen(httpPort);
	logger.log(`Application listening on port ${httpPort}`);
}
bootstrap();
