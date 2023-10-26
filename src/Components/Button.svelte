<script lang="ts">
    export let type: any ;
    
    </script>
    <button 
        type= {type}
        class="bg-customBlue hover:bg-customBlue-dark transition-colors duration-300 py-2 px-8 focus:outline-none rounded text-lg font-bold">
        <slot/>
    </button>