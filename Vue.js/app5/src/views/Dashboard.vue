<template>
    <div>
        <h3>Dashboard</h3>
        <button
                class="btn btn-danger signout-btn"
                @click.prevent="signOut"
        >Sign Out</button>

        <hr>

        <AddEvent />

        <hr>

        <EventItem
                v-for="(event_item, index) in $store.state.events"
                :event="event_item"
                :key="index"

        />


    </div>
    
</template>

<script>
    import { firebaseApp, eventRef } from '../firebase';
    import AddEvent from './AddEvent'
    import EventItem from './EventItem'

    export default {
        name: "Dashboard",
        methods: {
            signOut(){
                this.$store.dispatch('signOut');
                firebaseApp.auth().signOut();
            }
        },
        components: {
            AddEvent,
            EventItem
        },
        mounted() {
            eventRef.on('value', snap => {
                const events = [];
                snap.forEach(event => {
                    events.push(event.val())
                })

                this.$store.dispatch('setEvents', events)
            })
        }
    }
</script>
