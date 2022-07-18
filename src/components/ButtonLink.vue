<template>
    <router-link :to="{path: '/'}">
        <button class="Button">
            <slot>Button</slot>
        </button>
    </router-link>
</template>

<script>

</script>

<style lang="scss" scoped>
@import '../assets/_globalStyles.scss';
button{
    transition: all .5s ease;
    background-color: $green;
    font-size: 2rem;
    color: $white;
    font-family: 'Abel', sans-serif;
    border: none;
    border-radius: 0;
    padding: 12px;

     &:hover{
        transition: all .5s ease;
        background: $darkGreen;
    }
}
</style>