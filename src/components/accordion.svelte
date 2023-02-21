<script>
  export let question;
  export let answer;
  let isOpen = false;

  function toggle() {
    isOpen = !isOpen;
  }
  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  }
</script>

<div class="">
  <div
    class="flex items-center justify-between"
    on:click="{toggle}"
    role="button"
    tabindex="0"
    on:click="{toggle}"
    on:keydown="{handleKeyDown}"
  >
    <p>{question}</p>
    <img
      src="images/icon-arrow-down.svg"
      alt=""
      class="h-3 w-4 transform transition-transform duration-300"
      class:rotate-180="{isOpen}"
    />
  </div>
  {#if isOpen}
    <div class="">
      <p>{answer}</p>
    </div>
  {/if}
</div>
