import { Global, Module } from "@nestjs/common";
import {
	ConfigService,
	ConfigModule as NestConfigModule,
} from "@nestjs/config";

import { ConfigSchema } from "./config";
import { validateConfig } from "./utils";

@Global()
@Module({
	imports: [
		NestConfigModule.forRoot({
			isGlobal: true,
			envFilePath: [".env"],
			validationSchema: ConfigSchema,
			validate: validateConfig,
		}),
	],
	providers: [ConfigService],
	exports: [ConfigService],
})
export class ConfigModule {}
