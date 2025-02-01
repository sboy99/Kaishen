import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { Adapters } from "./adapters";
import { Controllers } from "./controllers";
import { Helpers } from "./helpers";
import { ConfigModule } from "./modules/config";
import { Repositories } from "./repositories";
import { Services } from "./services";
import { Transformers } from "./transformers";

@Module({
	imports: [ConfigModule, ScheduleModule.forRoot()],
	controllers: [...Controllers],
	providers: [
		...Services,
		...Helpers,
		...Repositories,
		...Adapters,
		...Transformers,
	],
})
export class AppModule {}
