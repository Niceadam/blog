<script lang="ts">
  let { data } = $props();
</script>

<div>
  <button onclick={() => history.back()}>Go Back</button>
  {@render data.content()}
</div>
