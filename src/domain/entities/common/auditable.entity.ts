export class AuditableEntity<T> {
	public id: string;
	public createdAt: Date;
	public updatedAt: Date;

	constructor(partial: Partial<T>) {
		Object.assign(this, partial);
	}
}
