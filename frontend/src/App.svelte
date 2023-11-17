<script>
    import Map from './Map.svelte';
    import Sidebar from './Sidebar.svelte';
    import { io } from 'socket.io-client';
    import { writable, get } from 'svelte/store';
  
    const data = writable([]);
  
    // Create a Socket.IO connection when the component mounts
    const socket = io('http://backend-server-url');
  
    socket.on('connect', () => {
      console.log('Connected to the server via Socket.IO');
    });
  
    // Receive initial data and updates from the server
    socket.on('data', (newData) => {
      data.set(newData);
    });
  
    // Fetch initial data from the server
    const fetchInitialData = async () => {
      const response = await fetch('/api/data');
      if (response.ok) {
        const initialData = await response.json();
        data.set(initialData);
      } else {
        console.error('Error fetching initial data');
      }
    };
  
    // Fetch initial data on mount
    fetchInitialData();
  
    // Cleanup on component destruction
    import { onDestroy } from 'svelte';
    onDestroy(() => {
      socket.disconnect();
    });
  </script>
  
  <div class="app-container">
    <Sidebar items={$data} />
    <Map data={$data} />
  </div>
  