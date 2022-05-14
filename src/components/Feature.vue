<template>
    <div>
            <div class="card">
                <img :src="source">
                <h4>{{title}}</h4>
                <p>{{paragraph}}</p>
            </div>
    </div>
</template>
<script>
export default {
    name: "Feature",

    
    props:{
        source: String,
        title: String,
        paragraph: String,
    }
}
</script>