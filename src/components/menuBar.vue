<template>
  <div class="navList">
    <div
      class="navItem"
      :class="getByRouteName(item)"
      v-for="(item, index) in navList"
      :key="index + 'navList'"
      @click="routeByType(item.route)"
    >
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface NavItemInterface {
  name: string; 
  route: string;
}
export default defineComponent({
  data() {
    return {
      navList: [
        {
          name: "margarita",
          route: "/Cocktail/margarita",
        },
        {
          name: "mojito",
          route: "/Cocktail/mojito",
        },
        {
          name: "a1",
          route: "/Cocktail/a1",
        },
        {
          name: "kir",
          route: "/Cocktail/kir",
        },
      ],
    };
  },
  methods: {
    routeByType(name: string) {
      this.$router.push(name);
    },
    getByRouteName:function(item: NavItemInterface){
      if(item.name == this.$route.params.name){
        return "isSelected"
      }
      return "";
    }
  },
});
</script>

<style lang="scss" scoped>
.isSelected {
  background: rgb(210, 210, 252);
}
.navItem {
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0px 24px;
  margin-bottom: 8px;
  &:hover {
    cursor: pointer;
    background: rgb(210, 210, 252);
  }
}
.navList {
  min-width: 200px;
  display: flex;
  flex-direction: column;
}
nav {
  padding: 30px;
  top: 20px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
