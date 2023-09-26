<script>
  import { Form, FormGroup, FormText, Input, Label } from "sveltestrap";
  import {
    amountOfCoolPoints,
    timeBasedLevel,
    timeBasedCoolPoints,
  } from "src/store";

  let level;
  timeBasedLevel.subscribe((v) => {
    level = v;
  });

  const handleInput = (e) => {
    amountOfCoolPoints.set(e.target.value);
  };
</script>

<h1>Aboute</h1>

<FormGroup>
  <Label for="exampleText">Text</Label>
  <Input on:change={handleInput} />
</FormGroup>
