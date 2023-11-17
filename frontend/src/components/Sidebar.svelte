<script>
    import { data } from './store.js'; // Assuming you have a store.js that exports a writable store named 'data'
  
    // Function to handle selection, if needed
    function selectItem(item) {
      // Emit an event or call another function when an item is clicked
    }
  </script>
  
  <aside class="bg-white shadow-md h-screen w-64 p-4 overflow-y-auto">
    {#each $data as item, index}
      <div class="p-2 hover:bg-gray-100 cursor-pointer" on:click={() => selectItem(item)}>
        <h3 class="font-semibold">{item.name}</h3>
        <p>Quantity: {item.quantity}</p>
        <p>Value: {item.value}</p>
        <!-- Add more item details here -->
      </div>
    {/each}
  </aside>
  