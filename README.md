# Svelte Cursor

## Description

A headless mouse trail cursor for Svelte

- Completely customisable styling
- Extendable cursor states: _hover, drag, disappear_

## Installation

You can install library from NPM using yarn or npm

```bash
yarn add svelte-cursor
```

## Usage

Installing the package will add a global component called `Cursor` to your project. You can use it like this:

```html
<script>
	import { Cursor } from 'svelte-cursor';
</script>

<Cursor>
	<div class="cursor" />
</Cursor>
```

You can then style the cursor however you want. For example:

```css
.cursor {
	width: 20px;
	aspect-ratio: 1;
	background-color: white;
	border-radius: 50%;
}
```

---

`Cursor` has the ability to change states when hovering over objects. To enable this, you need to add the `Interactive` component around the element you want the behavior to apply to. For example:

```html
<Interactive>
	<a href="/">A link element</a>
</Interactive>
```

By default, the `Interactive` component will expose the _hover_ state to the `Cursor` component. You can change this by passing a `state` prop to the `Interactive` component. For example:

```html
<Interactive state="drag"> ... </Interactive>
```

This will expose the _drag_ state to the `Cursor` component. You can then style the cursor based on the state like so:

```html
<Cursor let:state>
    <div class:draggable={state === 'drag'>
        Drag me
    </div>
</Cursor>

<style>
    .draggable {
        padding: 5px;
        backdrop-filter: blur(5px);
        background-color: rgba(255, 255, 255, 0.25);
        border: 1px solid rgba(255, 255, 255, 0.5);
        color: white;
    }
</style>
```

## License

MIT
