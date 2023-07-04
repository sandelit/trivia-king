<script lang="ts">
	export let text: string;
	export let disabled = false;
</script>

<button type="submit" {disabled}>{text}</button>

<style>
	button {
		border: 0;
		background-color: var(--color-theme-1);
		color: var(--color-text);
		cursor: pointer;
		border-radius: 6px;
		padding: 8px 12px;
		font-weight: bold;
		box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
		margin: 5px;
	}

	button:disabled {
    cursor: not-allowed;
		filter: brightness(50%); 
	}
</style>
