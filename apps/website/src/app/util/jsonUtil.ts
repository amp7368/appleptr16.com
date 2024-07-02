export function stripSchemaProp<T extends object>(
    obj: T & { $schema?: unknown }
): Omit<T, '$schema'> {
    const { $schema: _, ...rawData } = obj;
    return rawData;
}
