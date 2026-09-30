<script lang="ts">
	import type { Snippet } from 'svelte';

	let { text, children }: { text: string; children: Snippet } = $props();
</script>

<span class="group relative inline-flex">
	{@render children()}
	<span
		role="tooltip"
		class="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 rounded bg-black px-2 py-1 text-sm whitespace-nowrap text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100"
	>
		{text}
	</span>
</span>
