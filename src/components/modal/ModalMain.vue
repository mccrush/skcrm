<template>
  <div
    class="modal fade"
    id="modalWindow"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-fullscreen-sm-down">
      <div v-if="item" class="modal-content bg-white border-0">
        <div class="modal-header p-2 ps-3 pe-3">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            {{ getModalTitle }}
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body pt-0 pb-0">
          <component
            :is="myForm"
            :item="item"
            :mod="mod"
            :user="user"
            @save-item="saveItem"
            @show-modal="showModal"
          />
        </div>

        <!-- Footer -->
        <div v-if="user.access < 3" class="modal-footer p-2">
          <BtnRemoveItem
            v-if="mod === 'edit'"
            data-bs-dismiss="modal"
            @click="removeItem"
          />
          <BtnCreateItem
            v-if="mod === 'create'"
            data-bs-dismiss="modal"
            :disabled="
              item.type === 'order' &&
              (!item.stageId || !item.clientId || !item.kotelId)
                ? true
                : false
            "
            @click="createItem"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dataModels } from './../../data/dataModels'

import clientForm from './../forms/clientForm.vue'
import kotelForm from './../forms/kotelFormModal.vue'
import orderForm from './../forms/orderForm.vue'
import stageForm from './../forms/stageForm.vue'
import stageProductionForm from './../forms/stageForm.vue'
import userForm from './../forms/userForm.vue'

import BtnRemoveItem from './../buttons/BtnRemoveItem.vue'
import BtnCreateItem from './../buttons/BtnCreateItem.vue'

export default {
  components: {
    clientForm,
    kotelForm,
    orderForm,
    stageForm,
    stageProductionForm,
    userForm,
    BtnRemoveItem,
    BtnCreateItem
  },
  emits: ['show-modal'],
  props: {
    type: String,
    mod: String,
    item: Object,
    user: Object
  },
  computed: {
    myForm() {
      const component = this.type + 'Form'
      //console.log('component = ', component)
      return component
    },
    getModalTitle() {
      return dataModels.find(item => item.type === this.type).title
    }
  },
  methods: {
    createItem() {
      if (this.item.type === 'order') {
        this.$store.dispatch('addItemRT', { item: this.item })
      } else {
        this.$store.dispatch('addItem', { item: this.item })
      }
    },
    removeItem() {
      if (confirm('Точно удалить?')) {
        if (this.item.type === 'order') {
          this.$store.dispatch('removeItemRT', { item: this.item })
        } else {
          this.$store.dispatch('removeItem', { item: this.item })
        }
      }
    },
    saveItem() {
      if (this.mod === 'edit') {
        if (this.item.type === 'order') {
          this.$store.dispatch('updateItemRT', { item: this.item })
        } else {
          this.$store.dispatch('updateItem', { item: this.item })
        }
      }
    },
    showModal({ type, item, mod }) {
      this.$emit('show-modal', { type, item, mod })
    }
  }
}
</script>