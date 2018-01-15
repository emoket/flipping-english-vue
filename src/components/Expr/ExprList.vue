<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12 sm8 offset-sm2>
        <v-card>
          <v-card-title>
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
            v-model="selected"
            item-key="eng"
            select-all
            class="elevation-1"
          >

            <template slot="items" slot-scope="props">
              <td>
                <v-checkbox
                  primary
                  hide-details
                  v-model="props.selected"
                ></v-checkbox>
              </td>
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

      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
  export default {
    data () {
      return {
        max25chars: (v) => v.length <= 50 || 'Input too long!',
        tmp: '',
        search: '',
        selected: [],
        pagination: {},
        headers: [
          { text: 'English', value: 'eng' },
          { text: 'Korean', value: 'kor' },
          { text: 'Tag', value: 'tag' }
        ],
        items: [
          {
            value: false,
            eng: 'Have a nice day.',
            kor: '좋은 하루 되세요.',
            tag: 'have'
          },
          {
            value: false,
            eng: 'Let\'s call it a day.',
            kor: '오늘은 여기까지 하자',
            tag: 'call'
          },
          {
            value: false,
            eng: 'There is a ramp over there.',
            kor: '저 쪽에 경사로가 있어요.',
            tag: 'ramp'
          },
          {
            value: false,
            eng: 'It\'s been a fruitful day.',
            kor: '성과가 좋은 한 주 였어요.',
            tag: 'fruitful'
          }
        ]
      }
    }
  }
</script>
