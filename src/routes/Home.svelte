<script>
  import { token } from "src/stores/app";
  import { timeBasedLevel, timeBasedCoolPoints } from "src/stores/users";

  // Subscription method
  let level;
  timeBasedLevel.subscribe((v) => {
    level = v;
  });
</script>

<h1>Home</h1>
<p>
  time based Level: {level}
</p>
<p>
  cool points: {$token}
</p>
<p>
  time based cool points: {$timeBasedCoolPoints}
</p>
