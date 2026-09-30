<script lang="ts">
    import favicon from '$lib/assets/favicon.png';
	import Tooltip from '$lib/components/Tooltip.svelte';
	import ToolTip from "$lib/components/Tooltip.svelte"
	import { text } from '@sveltejs/kit';
    let downloads = $state(0);
    async function main(){
        downloads = await fetchDownloads();
    }

    const formatedDownloads = new Intl.NumberFormat("en-US", {notation: "compact", maximumFractionDigits: 2})
    const formatedDownloadsStandard = new Intl.NumberFormat("en-US", {notation: "standard"})


    async function fetchDownloads() {
        const response = await fetch('https://api.modrinth.com/v2/user/QCe37V9V/projects');
        const data = await response.json();
        let totalDownloads = 0;
        for (const project of data) {
            totalDownloads += project.downloads;
        }
        return totalDownloads;
    }
    main();
</script>

<main class="min-h-screen flex flex-col items-center">
    <img src={favicon} alt="icon" class="w-80 h-80 rounded-full mb-8 m-10">
    <div class="flex flex-col items-center">
        <h1 class="text-7xl font-bold text-white">Lukas</h1>
        <p class="text-3xl text-white font-bold text-center">Programmer and Software Engineer student</p>
    </div>
    <div class="flex flex-col items-center mt-8">
        <h1 class="text-3xl font-bold text-white">Links:</h1>
        <div class="flex flex-col items-center mt-4">
            <a href="https://github.com/lukasabbe/" class="text-white font-bold hover:underline">GitHub</a>
            <a href="https://modrinth.com/user/lukasabbe" class="text-white font-bold hover:underline">Modrinth</a>
        </div>
    </div>
    <div class="flex flex-col items-center mt-8">
        <h1 class="text-3xl font-bold text-white">Stats:</h1>
        <div class="flex flex-col items-center mt-4">
            <p class="text-white font-bold">Total Modrinth Downloads: <Tooltip text={formatedDownloadsStandard.format(downloads)}><span>{formatedDownloads.format(downloads)}</span></Tooltip></p>
        </div>
    </div>
</main>
