<template>
    <div class="modal fade" id="staticBackdrop" 
        data-bs-backdrop="static" data-bs-keyboard="false" 
        tabindex="-1" aria-labelledby="staticBackdropLabel" 
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content  border-0">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                        {{type}}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <component :is="myComponent" />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Understood</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {modelsFactory} from './../../helpers/modelsFactory'
import clientForm from './../forms/clientForm.vue'

export default {
    components: {
        clientForm
    },
    props: {
        type: String,
        mod: String,
        id: String
    },
    computed: {
        myComponent() {
            return this.type+'Form'
        },

        item() {
            if(this.type) {
                if (this.mod === 'create') {
                    const item = modelsFactory(this.type)
                return 
           } else {
                const items = this.$store.getters[this.type]
                return items.find(item => item.id === this.id)
           }
            } 
            return null
           
        }
    }
}
</script>