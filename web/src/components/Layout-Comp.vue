<template lang="html">
    <div>
        <header-comp />
        <footer-comp />
    </div>
</template>

<script>
import HeaderComp from './Header-Comp'
import FooterComp from './Footer-Comp'

export default {
    name: 'LayoutComp',
    data () {
        return {}
    },
    components: {
        HeaderComp, FooterComp
    }
}
</script>

<style>
</style>
