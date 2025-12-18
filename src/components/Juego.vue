<template>
    <div class="imagen">
        <img :src="imagen1" alt="no se pudo cargar la imagen">
        <img :src="imagen2" alt="no se pudo cargar la imagen">
        <img :src="imagen3" alt="no se pudo cargar la imagen">
    </div>
    <div class="respuesta">
        <p >Pokemon 1: {{ respuesta1 }}</p>
        <p >Pokemon 2: {{ respuesta2 }}</p>
        <p >Pokemon 3: {{ respuesta3 }}</p>
    </div>
    
    <button v-on:click="consumir()">Jugar</button>

</template>

<script>
import Quemados from '../components/Quemados.vue';
import { consumirApiFacade } from '../facade/PokemonFacade.js';

export default {


    data() {

        return {
            imagen1: "https://placehold.co/300x200",
            imagen2: "https://placehold.co/300x200",
            imagen3: "https://placehold.co/300x200",
            respuesta1: "*****",
            respuesta2: "*****",
            respuesta3: "*****",
            puntaje: null,
            intentos: 5,
            ganaste:null,
            perdiste:null

        }

    },

    computed: {},

    watch: {},

    methods: {
        async consumir() {
            const resp = await consumirApiFacade();
            const resp2 = await consumirApiFacade();
            const resp3 = await consumirApiFacade();
            

            this.imagen1 = resp.image;
            this.respuesta1 = resp.answer
            this.imagen2 = resp2.image;
            this.respuesta2 = resp2.answer;
            this.imagen3 = resp3.image;
            this.respuesta3 = resp3.answer

            this.intentos--;
            const sumar = (this.respuesta1 == "") + (this.respuesta2 == "") + (this.respuesta3 == "");

            if (sumar == 3) {
                this.puntaje += 5;
            } if (sumar == 2) {
                this.puntaje += 2;
            }

            if (this.intentos <= 0) {
                this.castigo();
                this.limpiar();
            }

            if (this.puntaje>=5) {
                this.premio();
            }

            return this.puntaje;


        },

        limpiar() {
            this.imagen1= "https://placehold.co/300x200";
            this.imagen2= "https://placehold.co/300x200";
            this.imagen3= "https://placehold.co/300x200";
            this.respuesta1= "*****";
            this.respuesta2= "*****";
            this.respuesta3= "*****";
            this.puntaje= null;
            this.intentos= 5;
        },
        premio() {
            this.ganaste="Felicidades Ganaste";
        },
        castigo() {
            this.perdiste="Lo siento perdiste";
        }   
    },

    components: {
        Quemados
    },



};

</script>

<style>
    
.respuesta {
    background-color: rgb(45, 102, 102);
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
}

.imagen {
    display: flex;
    flex-direction: row;
    background-color: beige;
    justify-content: center;
}

.datos {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

p {
    padding: 2%;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    justify-items: center;

}

image {
    width: 100px;
    height: 100px;
}
</style>