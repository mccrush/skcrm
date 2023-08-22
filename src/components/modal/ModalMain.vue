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
            {{ getModalTitle(type) }}
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
            @save-item="saveItem"
            @show-modal="showModal"
          />
        </div>
        <div class="modal-footer p-2">
          <button
            v-if="mod === 'edit'"
            type="button"
            class="btn btn-sm btn-danger"
            data-bs-dismiss="modal"
            @click="removeItem"
          >
            Удалить
          </button>
          <button
            v-if="mod === 'create'"
            type="button"
            class="btn btn-sm btn-success ms-2"
            data-bs-dismiss="modal"
            :disabled="
              item.type === 'order' &&
              (!item.stageId || !item.clientId || !item.kotelId)
                ? true
                : false
            "
            @click="createItem"
          >
            Создать
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import clientForm from './../forms/clientForm.vue'
import kotelForm from './../forms/kotelFormModal.vue'
import orderForm from './../forms/orderForm.vue'
import stageForm from './../forms/stageForm.vue'
import stageObrabotkaForm from './../forms/stageObrabotkaForm.vue'
import userForm from './../forms/userForm.vue'

export default {
  components: {
    clientForm,
    kotelForm,
    orderForm,
    stageForm,
    stageObrabotkaForm,
    userForm
  },
  emits: ['show-modal'],
  props: {
    type: String,
    mod: String,
    item: Object
  },
  computed: {
    myForm() {
      const component = this.type + 'Form'
      //console.log('component = ', component)
      return component
    }
  },
  methods: {
    createItem() {
      this.$store.dispatch('addItem', { item: this.item })
    },
    removeItem() {
      if (confirm('Точно удалить?')) {
        this.$store.dispatch('removeItem', { item: this.item })
      }
    },
    saveItem() {
      if (this.mod === 'edit') {
        this.$store.dispatch('updateItem', { item: this.item })
      }
    },
    showModal({ type, item, mod }) {
      this.$emit('show-modal', { type, item, mod })
    },

    getModalTitle(type) {
      const titles = {
        client: 'Клиент',
        kotel: 'Котел',
        order: 'Заказ'
      }
      return titles[type]
    }
  }
}
</script>