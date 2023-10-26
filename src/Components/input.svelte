<script lang="ts">
    export let label:string;
    export let type: any;
    export let required: boolean = true;
    export let name: any;
</script>

<div class="relative mb-4">
    <label for="" class="text-white-buttonFontleading-7 text-sm text-gray-600">{label}</label>
    <input type={type} name={name} required={required} 
        class="w-full bg-white rounded border border-white focus:border-white focus:ring-2 focus:ring-customBlue-dark text-white-buttonFont py-1 px-3 leading-8 transition-colors duration-200 ease-in-out outline-none">
</div>
