<template>
    <div>
        <h1>Tooltip</h1>
        <button class="btn btn-primary"
                @click.prevent="toggleShow()">Toggle</button>
        <h2 v-if="isShowing">Toooltip content</h2>
        <button class="btn btn-primary"
                @click.prevent="emitMethod">Emit event</button>
    </div>
</template>

<script>
    import localMixin from '../mixins/localMixin'
    import EventBus from '../eventBus'

    export default {
        name: "Tooltip",
        mixins: [localMixin],
        data() {
            return {
                title: 'Tooltip'
            }
        },
        methods: {
            emitMethod(){
                EventBus.$emit('CUSTOM_EVENT', 'eventData')
            }
        }
    }
</script>

<style scoped>

</style>