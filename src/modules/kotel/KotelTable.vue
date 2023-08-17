<template>
  <table class="table table-striped table-light shadow-sm small">
    <thead>
      <tr>
        <th scope="col" class="text-center small ps-3" width="12%">
          Тип
          <button
            class="btn btn-sm btn-light p-0 ps-2 pe-2"
            @click="setSortMethod('typek')"
          >
            ⇅
          </button>
        </th>
        <th scope="col" class="text-center small" width="12%">
          Мощ.
          <button
            class="btn btn-sm btn-light p-0 ps-2 pe-2"
            @click="setSortMethod('power')"
          >
            ⇅
          </button>
        </th>
        <th scope="col" class="text-center small" width="12%">
          Площ.
          <button
            class="btn btn-sm btn-light p-0 ps-2 pe-2"
            @click="setSortMethod('square')"
          >
            ⇅
          </button>
        </th>
        <th scope="col" class="text-center small lh-lg" width="14%">
          Разм (ш*г*в)
        </th>
        <th scope="col" class="text-center small lh-lg" width="12%">Бункер</th>
        <th scope="col" class="text-center small" width="10%">
          Вес
          <button
            class="btn btn-sm btn-light p-0 ps-2 pe-2"
            @click="setSortMethod('weight')"
          >
            ⇅
          </button>
        </th>

        <th scope="col" class="text-center small lh-lg" width="12%">Автом.</th>
        <th scope="col" class="text-center small lh-lg" width="10%">Цена</th>
        <th scope="col" class="text-center" width="6%">---</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>1</td>
        <td>2</td>
      </tr>
    </tbody>
  </table>
</template>