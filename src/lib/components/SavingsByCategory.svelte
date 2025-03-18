<script lang="ts">
    import { PieChart } from '@carbon/charts-svelte';
    import '@carbon/charts-svelte/styles.css';
    import type { SavingsByCategory } from '$lib/types';

    export let savingsByCategory: SavingsByCategory[];

    const chartData = savingsByCategory?.map(d => ({ group: d.service, value: d.savings }));

    const options = {
        title: "AWS Savings Distribution",
        resizable: true,
        pie: {
            labels: {
                enabled: true
            }
        },
        legend: {
            enabled: true,
            position: "right"
        },
        color: {
        scale: {
            EC2: "#6289EF",
            S3: "#21D7DB",
            RDS: "#03FFD1",
            Lambda: "#845EF9"
        }
    }
    };
</script>

<PieChart data={chartData} options={options} />
