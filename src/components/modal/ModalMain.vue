<template>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div v-if="item" class="modal-content  border-0">
                <div class="modal-header p-2 ps-3 pe-3">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                        {{ type }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <component :is="myForm" :item="item" />
                </div>
                <div class="modal-footer p-2">
                    <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Удалить</button> -->
                    <button type="button" class="btn btn-sm btn-success" data-bs-dismiss="modal"
                        @click="createItem">Создать</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import clientForm from './../forms/clientForm.vue'

export default {
    components: {
        clientForm
    },
    props: {
        type: String,
        mod: String,
        item: Object
    },
    computed: {
        myForm() {
            const component = this.type + 'Form'
            console.log('component = ', component);
            return component
        }
    },
    methods: {
        createItem() {
            this.$store.dispatch('addItem', { item: this.item })
        }
    }
}
</script>