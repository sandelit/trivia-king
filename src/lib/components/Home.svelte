<script lang="ts">
	import Button from '$components/Button.svelte';
	import { goto } from '$app/navigation';
	import { writable } from 'svelte/store';
	import { parameters } from '$lib/stores/formStore';

	let categoriesList = [
		{ id: '9', label: 'General knowledge' },
		{ id: '10', label: 'Books' },
		{ id: '11', label: 'Film' },
		{ id: '12', label: 'Music' },
		{ id: '21', label: 'Sports' },
		{ id: '22', label: 'Geography' },
		{ id: '27', label: 'Animals' },
		{ id: '23', label: 'History' }
	];

	let formValues = {
		difficulty: 'easy',
		type: 'multiple',
		selectedCategory: '',
		numberOfQuestions: 3
	};

	$: formValid =
		formValues.difficulty &&
		formValues.type &&
		formValues.selectedCategory &&
		formValues.numberOfQuestions;

	let handleSubmit = () => {
		$parameters = formValues;
		goto('/quiz');
	};
</script>

<form on:submit|preventDefault={handleSubmit} class="form p-10 rounded-lg flex flex-col">
	<h1>Let's test your trivia knowledge!</h1>
	<div class="my-5">
		<h3 class="underline mb-2">Difficulty</h3>
		<div class="flex">
			<div class="px-5">
				<input
					type="radio"
					id="easy"
					bind:group={formValues.difficulty}
					name="difficulty"
					value="easy"
				/>
				<label for="easy">Easy</label>
			</div>
			<div>
				<input
					type="radio"
					id="medium"
					bind:group={formValues.difficulty}
					name="difficulty"
					value="medium"
				/>
				<label for="medium">Medium</label>
			</div>
			<div class="px-5">
				<input
					type="radio"
					id="hard"
					bind:group={formValues.difficulty}
					name="difficulty"
					value="hard"
				/>
				<label for="hard">Hard</label>
			</div>
		</div>
		<h3 class="underline mt-5 mb-2">Type:</h3>
		<div class="flex">
			<div class="px-5">
				<input
					type="radio"
					id="multiple"
					name="multiple"
					bind:group={formValues.type}
					value="multiple"
				/>
				<label for="multiple">Multiple Choice</label>
			</div>
			<div>
				<input
					type="radio"
					id="boolean"
					name="boolean"
					bind:group={formValues.type}
					value="boolean"
				/>
				<label for="boolean">True / False</label>
			</div>
		</div>
	</div>

	<div class="my-5">
		<h3 class="underline">Choose one or multiple categories:</h3>
		<div class="grid grid-cols-2 mt-5 gap-5">
			{#each categoriesList as category}
				<div class="category">
					<input
						type="radio"
						id={category.id}
						bind:group={formValues.selectedCategory}
						value={category.id}
					/>
					<label for={category.id}>{category.label}</label>
				</div>
			{/each}
		</div>
	</div>

	<label for="numberOfQuestions"
		><h3><u>Number of questions</u>: {formValues.numberOfQuestions}</h3></label
	>
	<input
		required
		class="my-5"
		type="range"
		min="3"
		max="50"
		bind:value={formValues.numberOfQuestions}
	/>
	<Button disabled={!formValid} text="Play" />
</form>

<style>
	h3 {
		font-weight: bolder;
		font-size: 110%;
	}

	.form {
		background-color: var(--color-bg-1);
	}
</style>
