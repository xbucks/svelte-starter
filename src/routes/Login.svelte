<script>
  import { Form, FormGroup, FormText, Input, Label } from "sveltestrap";
</script>

<Form>
  <FormGroup>
    <Label for="exampleEmail">Email</Label>
    <Input
      type="email"
      name="email"
      id="email"
      placeholder="with a placeholder"
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">Password</Label>
    <Input
      type="password"
      name="password"
      id="password"
      placeholder="password placeholder"
    />
  </FormGroup>
</Form>
