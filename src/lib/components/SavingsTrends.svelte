<script lang="ts">
    import { LineChart } from '@carbon/charts-svelte';
    import '@carbon/charts-svelte/styles.css';
    import type { SavingsTrend } from '$lib/types';

    export let savingsTrends: SavingsTrend[];

    const chartData = savingsTrends?.map(d => ({ group: "", key: d.month, value: d.savings }));
    const chartOptions = {
        title: "Monthly Savings Trend",
        axes: {
            bottom: { 
                mapsTo: "key",
                scaleType: "labels"
            },
            left: { 
                mapsTo: "value",
                scaleType: "linear"
            }
        },
        points: { enabled: true },
        resizable: true,
    };
</script>

    <LineChart data={chartData} options={chartOptions} />