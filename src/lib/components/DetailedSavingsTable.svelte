<script lang="ts">
    import type { DetailedSaving } from '$lib/types';

    export let detailedSavings: DetailedSaving[];
</script>

<div class="card">
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Service</th>
                <th>Amount ($)</th>
            </tr>
        </thead>
        <tbody>
            {#each detailedSavings as saving}
                <tr>
                    <td>{saving.date}</td>
                    <td>{saving.service}</td>
                    <td>${saving.amount.toFixed(2)}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    .card {
        background: #fff; 
        padding: 1.5rem;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        overflow-x: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th, td {
        padding: 0.75rem;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    th {
        background-color: #f4f4f4;
        font-weight: bold;
    }

    tr:hover {
        background-color: #f9f9f9;
    }
</style>
