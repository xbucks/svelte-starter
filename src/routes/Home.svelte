<script>
  import {
    amountOfCoolPoints,
    timeBasedLevel,
    timeBasedCoolPoints,
  } from "src/store";

  // Subscription method
  let level;
  timeBasedLevel.subscribe((v) => {
    level = v;
  });

  // Demo up updating store values with set
  setTimeout(() => {
    amountOfCoolPoints.set(7);
  }, 2000);
</script>

<h1>Home</h1>
<p>
  time based Level: {level}
</p>
<p>
  cool points: {$amountOfCoolPoints}
</p>
<p>
  time based cool points: {$timeBasedCoolPoints}
</p>
