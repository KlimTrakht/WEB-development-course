<template>
    <div>
        <h3>Dashboard</h3>
        <button
                class="btn btn-danger signout-btn"
                @click.prevent="signOut"
        >Sign Out</button>
    </div>
    
</template>

<script>
    import { firebaseApp } from '../firebase';

    export default {
        name: "Dashboard",
        methods: {
            signOut(){
                this.$store.dispatch('signOut');
                firebaseApp.auth().signOut();
            }
        }
    }
</script>
