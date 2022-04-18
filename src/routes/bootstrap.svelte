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
  import { Button, Form, FormGroup, FormText, Input, Label } from 'sveltestrap';
  import { cars } from '../stores';

  let inputValue = 'Some plain text';
  let radioGroup;

  onMount(async () => {
    $cars = "Eve";
  });

  const handleSubmit = () => {
    console.log(inputValue);
  };
</script>

<svelte:head>
	<title>Bootstrap</title>
</svelte:head>

<div class="content">
	<h1>How to Use Bootstrap Components</h1>

  <p>{$cars}</p>

  <Form>
    <FormGroup>
      <Label for="exampleEmail">Plain Text (Static)</Label>
      <Input plaintext bind:value={inputValue} />
    </FormGroup>
    <FormGroup>
      <Label for="exampleEmail">Email</Label>
      <Input
        type="email"
        name="email"
        id="exampleEmail"
        placeholder="with a placeholder"
      />
    </FormGroup>
    <FormGroup>
      <Label for="examplePassword">Password</Label>
      <Input
        type="password"
        name="password"
        id="examplePassword"
        placeholder="password placeholder"
      />
    </FormGroup>
    <FormGroup>
      <Label for="exampleUrl">Url</Label>
      <Input
        type="url"
        name="url"
        id="exampleUrl"
        placeholder="url placeholder"
      />
    </FormGroup>
    <FormGroup>
      <Label for="exampleRange">Range</Label>
      <Input
        type="range"
        name="range"
        id="exampleRange"
        min={0}
        max={100}
        step={10}
        placeholder="Range placeholder"
      />
    </FormGroup>
    <FormGroup>
      <Label for="exampleNumber">Number</Label>
      <Input
        type="number"
        name="number"
        id="exampleNumber"
        placeholder="number placeholder"
      />
    </FormGroup>
    <FormGroup>
      <Label for="exampleDatetime">Datetime</Label>
      <Input
        type="datetime-local"
        name="datetime"
        id="exampleDatetime"
        placeholder="datetime placeholder"
      />
    </FormGroup>
    <FormGroup>
      <Label for="exampleDate">Date</Label>
      <Input
        type="date"
        name="date"
        id="exampleDate"
        placeholder="date placeholder"
      />
    </FormGroup>
    <FormGroup>
      <Label for="exampleTime">Time</Label>
      <Input
        type="time"
        name="time"
        id="exampleTime"
        placeholder="time placeholder"
      />
    </FormGroup>
    <FormGroup>
      <Label for="exampleColor">Color</Label>
      <Input
        type="color"
        name="color"
        id="exampleColor"
        placeholder="color placeholder"
      />
    </FormGroup>
    <FormGroup>
      <Label for="exampleSearch">Search</Label>
      <Input
        type="search"
        name="search"
        id="exampleSearch"
        placeholder="search placeholder"
      />
    </FormGroup>
    <FormGroup>
      <Label for="exampleSelect">Select</Label>
      <Input type="select" name="select" id="exampleSelect">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Input>
    </FormGroup>
    <!-- <FormGroup>
      <Label for="exampleSelectMulti">Select Multiple</Label>
      <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Input>
    </FormGroup> -->
    <FormGroup>
      <Label for="exampleText">Text Area</Label>
      <Input type="textarea" name="text" id="exampleText" />
    </FormGroup>
    <FormGroup>
      <Label for="exampleFile">File</Label>
      <Input type="file" name="file" id="exampleFile" />
      <FormText color="muted">
        This is some placeholder block-level help text for the above input. It's a
        bit lighter and easily wraps to a new line.
      </FormText>
    </FormGroup>
    <FormGroup>
      <Input
        id="r1"
        type="radio"
        bind:group={radioGroup}
        value="eenie"
        label="Eenie"
      />
      <Input
        id="r2"
        type="radio"
        bind:group={radioGroup}
        value="meanie"
        label="Meanie"
      />
      <Input
        id="r3"
        type="radio"
        bind:group={radioGroup}
        value="minie"
        label="Minie"
      />
      <Input
        id="r4"
        type="radio"
        bind:group={radioGroup}
        value="moe"
        label="Moe"
      />
    </FormGroup>
    <FormGroup>
      <Input id="c1" type="checkbox" label="Check me out" />
    </FormGroup>
    <FormGroup>
      <Input id="c1" type="switch" label="Switch me on" />
    </FormGroup>
  </Form>

  <Button color="primary" outline on:click={handleSubmit}>Hello World!</Button>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
