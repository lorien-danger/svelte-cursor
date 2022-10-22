<script>import { onMount } from 'svelte';
let cursor;
let mobileUser = false;
onMount(() => {
    mobileUser = window.matchMedia('(pointer: coarse)').matches;
    if (mobileUser) {
        cursor.style.display = 'none';
        return;
    }
    const interactables = document.querySelectorAll('.interactive');
    const disappearInteractables = document.querySelectorAll('.interactive-disappear');
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    interactables.forEach((interactable) => {
        interactable.addEventListener('mouseover', handleHoverEnter);
        interactable.addEventListener('mouseout', handleHoverLeave);
    });
    disappearInteractables.forEach((interactable) => {
        interactable.addEventListener('mouseover', handleHoverEnterDisappear);
        interactable.addEventListener('mouseout', handleHoverLeaveDisappear);
    });
});
function handleMouseMove(event) {
    const opacity = cursor.style.getPropertyValue('--mouse-opacity');
    if (opacity === '0') {
        cursor.style.setProperty('--mouse-opacity', '1');
    }
    cursor.style.setProperty('--mouse-x', event.clientX + 'px');
    cursor.style.setProperty('--mouse-y', event.clientY + 'px');
}
function handleMouseLeave() {
    cursor.style.setProperty('--mouse-opacity', '0');
}
function handleHoverEnter() {
    cursor.style.setProperty('--mouse-size', '75px');
}
function handleHoverLeave() {
    cursor.style.setProperty('--mouse-size', '20px');
}
function handleHoverEnterDisappear() {
    cursor.style.setProperty('--mouse-size', '2px');
}
function handleHoverLeaveDisappear() {
    cursor.style.setProperty('--mouse-size', '20px');
}
</script>

{#if !mobileUser}
	<div bind:this={cursor} class="cursor" />
{/if}

<style>
	.cursor {
		--mouse-x: -100px;
		--mouse-y: -100px;
		--mouse-size: 20px;
		--mouse-opacity: 1;

		height: var(--mouse-size);
		aspect-ratio: 1;
		border-radius: 50%;

		z-index: 1000;
		pointer-events: none;

		transform: translate(-50%, -50%);
		position: fixed;
		top: var(--mouse-y);
		left: var(--mouse-x);

		backdrop-filter: invert(1);
		opacity: var(--mouse-opacity);

		transition-property: top left opacity;
		transition-duration: 0.2s;
		transition-timing-function: ease-out;
	}
</style>
