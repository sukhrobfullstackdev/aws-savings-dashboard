<script lang="ts">
    import { onMount } from 'svelte';
    import "../app.css";

    let activeLink = 1;
</script>

<div class="min-h-screen flex flex-col">
    <header class="flex items-center justify-between px-8 py-4 bg-[#1F2125]">
    <img src="/logo.svg" alt="Logo" class="h-8 w-auto" />
        <nav class="flex space-x-2 border border-gray-600 rounded-full px-4 py-2 text-gray-400">
        <a 
            class="flex items-center px-3 py-1 rounded-full transition-all duration-300"
            :class="activeLink === 1 ? 'text-white' : 'text-gray-500'"
            on:click={() => activeLink = 1}
        >
            {#if activeLink === 1}
                <span class="text-cyan-400 text-lg mr-1">•</span>
            {/if}
            NAV LINK-1
        </a>

        <a 
            class="flex items-center px-3 py-1 rounded-full transition-all duration-300"
            :class="activeLink === 2 ? 'text-white' : 'text-gray-500'"
            on:click={() => activeLink = 2}
        >
            {#if activeLink === 2}
                <span class="text-cyan-400 text-lg mr-1">•</span>
            {/if}
            NAV LINK-2
        </a>

        <a 
            class="flex items-center px-3 py-1 rounded-full transition-all duration-300"
            :class="activeLink === 3 ? 'text-white' : 'text-gray-500'"
            on:click={() => activeLink = 3}
        >
            {#if activeLink === 3}
                <span class="text-cyan-400 text-lg mr-1">•</span>
            {/if}
            NAV LINK-3
        </a>
    </nav>
    </header>

    <slot /> 
</div>
