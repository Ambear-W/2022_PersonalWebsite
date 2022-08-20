<template>
    <button class="Button" >
        <slot>Button</slot>
    </button>
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
    width: 251px;
    height: 54px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 95px;

     &:hover{
        transition: all .5s ease;
        background: $darkGreen;
    }
}
</style>