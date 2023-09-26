<script>
	export let id

    import { Button } from 'sveltestrap'
    import { navigate } from "svelte-routing"
    import Counter from 'src/lib/Counter.svelte'

    const gotohome = () => {
        navigate("/", { replace: true })
    }
</script>

<h1>BlogPost {id}</h1>

<Counter />

<Button color="secondary" on:click={gotohome}>
    Go to Home
</Button>