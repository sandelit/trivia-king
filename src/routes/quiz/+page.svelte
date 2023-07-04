<script lang="ts">
	import { parameters } from '$lib/stores/formStore';
	import { onMount } from 'svelte';
	import Question from '$components/Question.svelte';
	import type QuestionModel from '$lib/models/question';
	import { error } from '@sveltejs/kit';

	let questions: QuestionModel[] = [];
	let token = '';
	let url = 'https://opentdb.com/api.php?';
	let tempUrl = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium';
	parameters.subscribe((params) => {
		url += `amount=${params.numberOfQuestions}`;
		url += `&type=${params.type}`;
		url += `&category=${params.selectedCategory}`;
		url += `&difficulty=${params.difficulty}`;
	});

	onMount(async () => {
		await fetch('https://opentdb.com/api_token.php?command=request')
			.then((r) => {
				return r.json();
			})
			.then((r) => {
				token = r.token;
        console.log(token)
			})
			.catch((e: any) => {
				error(e);
			});

		await fetch(tempUrl + '&token=' + token)
			.then((r) => {
        console.log(token)
				console.log(r);
				return r.json();
			})
			.then((data) => {
				questions = data.results;
			});
	});
</script>

<Question question={questions[0]} />
