import { fetchAWSData } from '$lib/api';
import type { AWSData } from '$lib/types';

export async function load(): Promise<{ data: AWSData }> {
    const data = await fetchAWSData();
    return { data };
}
