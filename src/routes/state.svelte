<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import { Button, Form, FormGroup, Input, Label } from 'sveltestrap';
  import { user } from '../stores';

  let inputValue = 'Some plain text';

  onMount(async () => {
    console.log($user);
  });

  const handleSubmit = () => {
    $user = inputValue;
  };
</script>

<svelte:head>
	<title>Bootstrap</title>
</svelte:head>

<div class="content">
	<h1>How to Do State Management</h1>

  <p>Hello, {$user}!</p>

  <Form>
    <FormGroup>
      <Label for="userName">Username</Label>
      <Input id="userName" plaintext bind:value={inputValue} />
    </FormGroup>
    <FormGroup>
      <Label for="userEmail">Email</Label>
      <Input
        type="email"
        name="email"
        id="useEmail"
        placeholder="with a placeholder"
      />
    </FormGroup>
  </Form>

  <Button color="primary" outline on:click={handleSubmit}>Update</Button>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
