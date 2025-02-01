import { Logger } from "@nestjs/common";
import { ZodError } from "zod";
import { ConfigSchema, type TConfig } from "./config";

export function validateConfig(config: unknown): TConfig {
	const logger = new Logger("Config");
	try {
		const validConfig = ConfigSchema.parse(config);
		logger.log("Config validated successfully");
		return validConfig;
	} catch (error) {
		if (error instanceof ZodError) {
			logger.error(serializeZodError(error));
		}
		process.exit(1);
	}
}

function serializeZodError(error: ZodError): string {
	return error.errors.map((err) => `${err.path} ${err.message}`).join(", ");
}
