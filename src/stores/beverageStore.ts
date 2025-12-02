import { defineStore } from "pinia";
import { collection, getDocs, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

interface Ingredient {
  id: string;
  name: string;
  color: string;
}

interface Beverage {
  id?: string;
  name: string;
  temp: string;
  base: Ingredient;
  creamer: Ingredient;
  syrup: Ingredient;
}

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: ["Hot", "Cold"],

    bases: [] as Ingredient[],
    creamers: [] as Ingredient[],
    syrups: [] as Ingredient[],

    currentTemp: "Hot",
    currentBase: null as Ingredient | null,
    currentCreamer: null as Ingredient | null,
    currentSyrup: null as Ingredient | null,

    beverageName: "",
    savedBeverages: [] as Beverage[],
  }),

  actions: {
    async init() {
      const b = await getDocs(collection(db, "bases"));
      this.bases = b.docs.map((x) => x.data() as Ingredient);

      const c = await getDocs(collection(db, "creamers"));
      this.creamers = c.docs.map((x) => x.data() as Ingredient);

      const s = await getDocs(collection(db, "syrups"));
      this.syrups = s.docs.map((x) => x.data() as Ingredient);

      this.currentBase = this.bases[0];
      this.currentCreamer = this.creamers[0];
      this.currentSyrup = this.syrups[0];

      onSnapshot(collection(db, "beverages"), (snap) => {
        this.savedBeverages = snap.docs.map((d) => ({
          id: d.id,
          ...(d.data() as Beverage),
        }));
      });
    },

    async makeBeverage() {
      if (!this.beverageName.trim()) return;

      const newBev = {
        name: this.beverageName,
        temp: this.currentTemp,
        base: this.currentBase!,
        creamer: this.currentCreamer!,
        syrup: this.currentSyrup!,
      };

      await addDoc(collection(db, "beverages"), newBev);

      this.beverageName = "";
    },

    showBeverage(b: Beverage) {
      this.currentTemp = b.temp;
      this.currentBase = b.base;
      this.currentCreamer = b.creamer;
      this.currentSyrup = b.syrup;
    },
  },
});
