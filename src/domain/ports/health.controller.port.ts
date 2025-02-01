import type { THealth } from "../types";

export interface HealthControllerPort {
	check(): Promise<THealth>;
}
