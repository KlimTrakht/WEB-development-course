<template>
    <div class="col-md-12">
        <Item
                v-for="(item, index) in items"
                :key="index"
                :passed-item="item"
                :type=type

        />
    </div>
    
</template>

<script>
    import Item from './Item'

    export default {
        name: "Data",
        components: {
            Item
        },
        data(){
            return {
                type: this.$route.params.type,
                items: [],
                url: process.env.VUE_APP_URL
            }
        },
        watch: {
            '$route': 'fetchItems'
        },
        methods: {
            fetchItems(){
                this.items = [];
                this.type = this.$route.params.type;

                const initial_ids = [1,13,14];

                for(const i in initial_ids) {
                    const id = initial_ids[i];
                    fetch(`${this.url}${this.type}/${id}`, {
                        method: 'GET'
                    })
                        .then(response => response.json() )
                        .then(json => this.items.push(json))
                }
            }
        },
        created(){
            this.fetchItems()
        }
    }
</script>
