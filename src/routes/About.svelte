<script>
  import { FormGroup, Input, Label } from "sveltestrap";
  import { token } from "src/stores/app";

  const handleInput = (e) => {
    token.set(e.target.value);
  };
</script>

<h1>Aboute</h1>

<FormGroup>
  <Label for="exampleText">Text</Label>
  <Input on:change={handleInput} />
</FormGroup>
