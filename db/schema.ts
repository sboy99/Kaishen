import { sql } from "drizzle-orm";
import { pgTable as createTable } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";

// -------------------------------PRIVATE--------------------------------- //

const commonColumns = {
	id: t.uuid("id").primaryKey().default(sql`uuid_generate_v4()`),
	createdAt: t.timestamp("created_at", { withTimezone: true }).defaultNow(),
	updatedAt: t
		.timestamp("updated_at", { withTimezone: true })
		.defaultNow()
		.$onUpdate(() => new Date()),
};

// -------------------------------PUBLIC--------------------------------- //

export const transactions = createTable("transactions", {
	...commonColumns,
	name: t.text("name").notNull(),
	amount: t.numeric("amount").notNull(),
	txHash: t.text("tx_hash").notNull(),
});
