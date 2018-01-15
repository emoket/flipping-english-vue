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
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed app dark class="teal">
      <v-toolbar-side-icon
        @click.stop="drawer = !drawer">
      </v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">{{ brandName }}</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon
        v-for="item in menuItems"
        :key="item.title"
        :to="item.link"
      >
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <router-view/>
        </v-layout>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        brandName: 'Flipping English',
        drawer: false,
        miniVariant: true,
        menuItems: [
          { icon: 'add', title: 'Add Expression', link: '/expr/add' },
          { icon: 'list', title: 'List', link: '/expr/list' }
        ]
      }
    }
  }
</script>
