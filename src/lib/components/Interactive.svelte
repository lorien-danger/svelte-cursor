<script lang="ts">
	import { cursorState } from '$lib/stores/cursorState';

	export let state = 'hover';

	let hovering = false;

	function enter() {
		hovering = true;
		$cursorState = state;
	}

	function leave() {
		hovering = false;
		$cursorState = null;
	}
</script>

<span on:mouseenter={enter} on:mouseleave={leave}>
	<slot {hovering} />
</span>
