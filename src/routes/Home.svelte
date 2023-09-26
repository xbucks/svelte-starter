<script>
  import { onMount } from "svelte";
  import { token, lists } from "src/stores/app";
  import { getLists } from "src/services/app";

  onMount(async () => {
    const _lists = await getLists();
    lists.set(_lists.data.drinks);
  });
</script>

<h1>Home</h1>
<p>
  cool points: {$token}
</p>
{#each $lists as list}
  <li>{list.strDrink}</li>
{/each}
