<script>
  const alert = () => {
    window.alert('hi');
  }
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<h1>Home</h1>

<button on:click="{alert}">alert</button>