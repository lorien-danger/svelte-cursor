<script lang="ts">
	import { onMount } from 'svelte';
	import { cursorState } from '$lib/stores/cursorState';

	let cursor: HTMLElement;
	let disabled = false;

	onMount(() => {
		if (window.matchMedia('(pointer: coarse)').matches) {
			disabled = true;
			return;
		}

		window.addEventListener('mousemove', (e) => {
			cursor.style.setProperty('--mouse-x', e.clientX + 'px');
			cursor.style.setProperty('--mouse-y', e.clientY + 'px');
		});
	});
</script>

{#if !disabled}
	<div bind:this={cursor} class="cursor">
		<slot state={$cursorState} />
	</div>
{/if}

<style lang="postcss">
	.cursor {
		--mouse-y: -100px;
		--mouse-x: -100px;

		position: fixed;
		z-index: 9999;
		transform: translateX(calc(var(--mouse-x) - 50%)) translateY(calc(var(--mouse-y) - 50%));

		pointer-events: none;
		transition: transform 0.2s ease-out;
	}
</style>
