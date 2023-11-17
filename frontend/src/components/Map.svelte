<script>
    import { onMount } from 'svelte';
    import L from 'leaflet';
    import 'leaflet/dist/leaflet.css';
    import * as d3 from 'd3';
    import { data } from './store.js'; // Assuming you have a store.js that exports a writable store named 'data'
  
    let map;
  
    onMount(() => {
      map = L.map('map').setView([39.8282, -98.5795], 4);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  
      // Initialize the D3 layer here
  
      // Subscribe to the data store for updates
      const unsubscribe = data.subscribe($data => {
        // Update D3 visualization with new $data
        updateVisualization($data);
      });
  
      return () => {
        // Cleanup function
        map.remove();
        unsubscribe(); // Stop listening to data changes when the component is destroyed
      };
    });
  
    function updateVisualization(newData) {
      // Use D3 to update the map based on newData
    }
  </script>
  
  <div id="map" class="h-full"></div>
  