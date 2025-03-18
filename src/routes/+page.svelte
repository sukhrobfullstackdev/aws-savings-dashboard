<script lang="ts">
    import SavingsTrends from '$lib/components/SavingsTrends.svelte';
    import SavingsByCategory from '$lib/components/SavingsByCategory.svelte';
    import DetailedSavingsTable from '$lib/components/DetailedSavingsTable.svelte';

    export let data;
</script>


<div class="bg-[#1F2125] grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
    <div class="bg-[#F8FCFD] rounded-xl p-4 shadow-md">
        <SavingsTrends savingsTrends={data?.data?.savingsTrends} />
    </div>

    <div class="bg-[#F8FCFD] rounded-xl p-4 shadow-md min-h-[45vh]">
        <SavingsByCategory savingsByCategory={data?.data?.savingsByCategory} />
    </div>

    <div class="bg-[#F8FCFD] rounded-xl p-4 shadow-md md:col-span-2">
        <DetailedSavingsTable detailedSavings={data?.data?.detailedSavings} />
    </div>
</div>
