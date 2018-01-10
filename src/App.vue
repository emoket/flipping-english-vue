<template>
  <v-app>
    <v-navigation-drawer
      fixed
      :mini-variant="miniVariant"
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon" to="item.link"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>



    <v-toolbar fixed app dark class="teal">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="brandName"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>add</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>list</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>

    <main>
      <router-view></router-view>
    </main>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        brandName: 'Flipping English',
        drawer: false,
        miniVariant: true,
        items: [
          { icon: 'add', title: 'Add Expression', link: '/expr/add' },
          { icon: 'list', title: 'List', link: 'expr/list' },
          { icon: 'search', title: 'Search', link: 'expr/search' }
        ]
      }
    }
  }
</script>
