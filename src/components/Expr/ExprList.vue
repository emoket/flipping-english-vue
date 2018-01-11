<template>
  <v-card>
    <v-card-title>
      영어 표현 목록
      <v-spacer></v-spacer>
      <v-text-field
        append-icon="search"
        label="Type to search"
        single-line
        hide-details
        v-model="search"
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-right">{{ props.item.seq }}</td>
        <td class="text-xs-right">
          <v-edit-dialog
            @open="tmp = props.item.eng"
            @save="props.item.eng = tmp || props.item.eng"
            large
            lazy
          >
            <div>{{ props.item.eng }}</div>
            <div slot="input" class="mt-3 title">Update English</div>
            <v-text-field
              slot="input"
              label="Edit"
              v-model="tmp"
              single-line
              counter
              autofocus
              :rules="[max25chars]"
            ></v-text-field>
          </v-edit-dialog>
        </td>
        <td class="text-xs-right">
          <v-edit-dialog
            @open="tmp = props.item.kor"
            @save="props.item.kor = tmp || props.item.kor"
            large
            lazy
          >
            <div>{{ props.item.kor }}</div>
            <div slot="input" class="mt-3 title">Update Korean</div>
            <v-text-field
              slot="input"
              label="Edit"
              v-model="tmp"
              single-line
              counter
              autofocus
              :rules="[max25chars]"
            ></v-text-field>
          </v-edit-dialog>
        </td>
        <td class="text-xs-right">
          <v-edit-dialog
            @open="tmp = props.item.tag"
            @save="props.item.tag = tmp || props.item.tag"
            large
            lazy
          >
            <div>{{ props.item.tag }}</div>
            <div slot="input" class="mt-3 title">Update Tags</div>
            <v-text-field
              slot="input"
              label="Edit"
              v-model="tmp"
              single-line
              counter
              autofocus
              :rules="[max25chars]"
            ></v-text-field>
          </v-edit-dialog>
        </td>
      </template>
      <template slot="pageText" slot-scope="{ pageStart, pageStop }">
        From {{ pageStart }} to {{ pageStop }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        max25chars: (v) => v.length <= 50 || 'Input too long!',
        tmp: '',
        search: '',
        pagination: {},
        headers: [
          {
            text: 'Seq_No.',
            value: 'seq',
            align: 'left',
            sortable: true
          },
          { text: 'English', value: 'eng' },
          { text: 'Korean', value: 'kor' },
          { text: 'Tag', value: 'tag' }
        ],
        items: [
          {
            seq: 1,
            eng: 'Have a nice day.',
            kor: '좋은 하루 되세요.',
            tag: 'e'
          },
          {
            value: false,
            seq: 2,
            eng: 'aaaaaaa',
            kor: 'ㄱㄱㄱㄱㄱㄱㄱ',
            tag: 'a'
          },
          {
            value: false,
            seq: 3,
            eng: 'bbbbbbbbb',
            kor: 'ㄴㄴㄴㄴㄴㄴ',
            tag: 'c'
          },
          {
            value: false,
            seq: 4,
            eng: 'cccccccc',
            kor: 'ㄷㄷㄷㄷㄷㄷㄷㄷ',
            tag: 'd'
          }
        ]
      }
    }
  }
</script>
