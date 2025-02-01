import type { HealthControllerPort } from "@/domain/ports";
import type { THealth } from "@/domain/types";
import { HealthService } from "@/services";
import { Controller, Get, Inject } from "@nestjs/common";

@Controller()
export class HealthController implements HealthControllerPort {
	constructor(
		@Inject(HealthService) private readonly _healthService: HealthService,
	) {}

	@Get()
	public async check(): Promise<THealth> {
		return this._healthService.check();
	}
}
