import { z } from "zod";

// -----------------------------CONSTANTS----------------------------------- //

const _str = z.string();
const _port = z.coerce.number();
const _num = z.coerce.number();

// -----------------------------SCHEMAS----------------------------------- //

export const NodeConfigSchema = z.object({
	NODE_ENV: z
		.enum(["production", "development", "stage"])
		.default("development"),
});

export const AppConfigSchema = z.object({
	HTTP_PORT: _port.default(3000),
	ORIGINS: _str.transform((value) => value.split(",")).default("*"),
});

export const PostgresConfigSchema = z.object({
	POSTGRES_HOST: _str,
	POSTGRES_USER: _str,
	POSTGRES_PASSWORD: _str,
	POSTGRES_DB: _str,
	POSTGRES_PORT: _port,
});

export const ConfigSchema =
	AppConfigSchema.and(NodeConfigSchema).and(PostgresConfigSchema);

export type TConfig = z.infer<typeof ConfigSchema>;
