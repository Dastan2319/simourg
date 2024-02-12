<template>
  <div class="cocktailList">
    <div class="CocktailCard" v-for="(item,index) in getCocktailByType()" :key="index + 'getCocktail'">
      <img class="imgStyle" v-lazy="item.strDrinkThumb" alt="">
      <div class="name">
        <span>Name:{{ item?.strDrink }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCocktailStore } from '../store/CocktailStore';
interface ICocktailBody{
  strDrinkThumb:string,
  strDrink: string
}
interface IView{
  name:string,
  drinks:Array<ICocktailBody>
}

export default defineComponent({
  data(){
    return{
      name: this.$route.params.name,
      drinks: []
    } as IView
  },  
  setup(){ 
    const store = useCocktailStore();
    return { store}
  },  
  mounted() {
    this.fetchCocktailByType()
  },
  methods:{
    getCocktailByType(){
      return this.store.getCocktail(this.name) as Array<ICocktailBody>;
    },
    fetchCocktailByType(){
      this.store.fetchCocktailByType(this.name)
    }
  },
  beforeRouteUpdate(to ){
    this.name = to.params.name.toString();
    this.fetchCocktailByType()
  }
});
</script>

<style lang="scss" scoped>
.imgStyle{
  width: 320px;
  height: 320px;
  @media (max-width: 650px) { 
    width: 100%;
    height: 100%;
   }
}
.cocktailList{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.CocktailCard{
  border: 1px solid black;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  @media (max-width: 650px) { 
    padding: 16px;
    margin-bottom: 8px;
   }
  .name{
    font-size: 18px;
    margin-top: 8px;
  }
}
</style>
