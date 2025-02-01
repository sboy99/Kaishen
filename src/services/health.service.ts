import type { THealth } from "@/domain/types";
import { Injectable } from "@nestjs/common";

@Injectable()
export class HealthService {
	public async check(): Promise<THealth> {
		return "UP";
	}
}
