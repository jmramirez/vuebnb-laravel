<template>
    <div id="footer">
        <div class="hr"></div>
        <div :class="containerClass">
            <p>
                <img class="icon" src="/images/logo_grey.png">
                <span>
                    <strong>Vuebnb</strong>. Full stack Vue.js and Laravel demo app
                </span>
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        computed: {
            containerClass() {
                return `${this.$route.name}-container`;
            }
        }
    }
</script>
<style>
    #footer {
        margin-bottom: 3em;
    }

    #footer .icon {
        height: 23px;
        display: inline-block;
        margin-bottom: -6px;
    }

    .hr {
        border-top: 1px solid #dce0e0;
        margin: 3em 0;
    }

    #footer p {
        font-size: 15px;
        color: #767676 !important;
        display: flex;
    }

    #footer p img {
        padding-right: 6px;
    }
</style>
