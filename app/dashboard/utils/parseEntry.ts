
import { EntriesState } from "../entries/EntriesProvider";
import { Entry } from "../interface/entry";

export function parseEntry(data: any[]): EntriesState {
    const transformedEntries: Entry[] = data.map((entry: any) => ({
        _id: `${entry.id}`,
        cant: entry.cant,
        description: entry.description,
        status: entry.status,
        createAt: new Date(entry.createdAt).getTime(),
        state: entry.state
    }));

    console.log(transformedEntries)
    
    return {
        entries: transformedEntries
    };
}