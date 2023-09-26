<script>
  import { FormGroup, Input, Label } from "sveltestrap";
  import { amountOfCoolPoints } from "src/store";

  const handleInput = (e) => {
    amountOfCoolPoints.set(e.target.value);
  };
</script>

<h1>Aboute</h1>

<FormGroup>
  <Label for="exampleText">Text</Label>
  <Input on:change={handleInput} />
</FormGroup>
