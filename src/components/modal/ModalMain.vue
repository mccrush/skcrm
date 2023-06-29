<template>
    <div class="modal fade" id="staticBackdrop" 
        data-bs-backdrop="static" data-bs-keyboard="false" 
        tabindex="-1" aria-labelledby="staticBackdropLabel" 
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div v-if="item" class="modal-content  border-0">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                        {{type}}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    {{mod}}
                    <pre>{{item}}</pre>
                    <component :is="myComponent" :item="item"/>
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
        myComponent() {
            const component = this.type+'Form'
            console.log('component = ', component);
            return component
        }
    }
}
</script>