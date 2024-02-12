import { defineStore } from 'pinia'
import { CONFIG } from '../api';


interface CocktailInterface {
    CocktailState: Map<string, any[]>
}
interface IResponse {
    drinks: []
}
export const useCocktailStore = defineStore('Cocktail', {
    state: () => {
        return {
            CocktailState:  new Map<string, any[]>(),
        } as CocktailInterface
      },
    getters: {
        getCocktail(){      
            return (type:any) => this.CocktailState.get(type);
        }
    },
    actions: {
        async fetchCocktailByType(type: any) {
            if(!type || this.CocktailState.has(type)) return;
            try {
                const response: any = await fetch(CONFIG.API + "?s=" + type);
                const data: IResponse= await response.json();                
                this.CocktailState.set(type,data.drinks);                
            } catch (err) {
                console.error(err)
            }
        },
    }

})