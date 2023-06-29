<template>
    <div class="row">
        <!-- имя клиента -->
        <div class="col-6 pe-1">
        <form @submit.prevent class="form-floating">
            <input
            type="text"
            class="form-control form-control-sm"
            id="inputName"
            v-model.trim="item.name"
            @change="$emit('save-item')"
            />
            <label for="inputName">Имя</label>
        </form>
        </div>

        <!-- город клиента -->
        <div class="col-6 pe-1">
        <form @submit.prevent class="form-floating">
            <input
            type="text"
            class="form-control form-control-sm"
            id="inputCity"
            v-model.trim="item.city"
            @change="$emit('save-item')"
            />
            <label for="inputCity">Город</label>
        </form>
        </div>

        <!-- телефон клиента -->
        <div class="col-6 mt-2 pe-1">
        <form @submit.prevent class="form-floating">
            <input
            type="text"
            class="form-control form-control-sm"
            id="inputPhone"
            v-model.trim="item.phone"
            @change="$emit('save-item')"
            />
            <label for="inputPhone">Телефон</label>
        </form>
        </div>

        <!-- источник контакта -->
      <div class="col-6 mt-2 pe-0">
      <form @submit.prevent class="form-floating">
        <select
          class="form-select"
          id="inputSours"
          v-model="item.sours"
          @change="$emit('save-item')"
        >
          <option
            v-for="sours in dataSourses"
            :key="sours"
            :value="sours"
          >
            {{ sours }}
          </option>
        </select>
        <label for="inputSours">Источник</label>
      </form>
    </div>

        <!-- Комментарий -->
        <div class="col-12 mt-2">
        <form class="form-floating">
            <textarea
            class="form-control form-control-sm border-0"
            id="inputDescription"
            rows="4"
            v-model.trim="item.description"
            @change="$emit('save-item')"
            ></textarea>
            <label for="inputDescription">Комментарий</label>
        </form>
    </div>
    </div>
</template>

<script>
import {dataSourses} from './../../data/dataSourses'

export default {
    props: {
        item: { type: Object,
        require: true
        }
    },
    emits: ['save-item'],
    data() {
        return {
            dataSourses
        }
    }
}
</script>