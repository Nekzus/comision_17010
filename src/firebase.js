//Me traigo la funcion para "conectar" la aplicacion
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

//Traigo el objeto de configuracion de la cuenta de firebase
const firebaseConfig = {
    apiKey: "AIzaSyCCd647E0YHGcrWWZtjmC1e7G7yyPY5n8g",
    authDomain: "comision-17010.firebaseapp.com",
    projectId: "comision-17010",
    storageBucket: "comision-17010.appspot.com",
    messagingSenderId: "173400251999",
    appId: "1:173400251999:web:d4f43009b72feb7745c5ea"
};

//Creo una instancia de la aplicacion. Pasandole esta insntacia a los servicios de firebase, la reciben como parametro
const app = initializeApp(firebaseConfig);

//Creo una instancia de firestore usando la instancia de la aplicacion perviamente creada. Es como un a "referencia" de la base de datos
export const db = getFirestore(app);

//Esta variable es la que me va a permitir acceder a los datos entonces la tengo que importar desde todos los componentes en donde vaya a hacer consultas : ItemListContainer - ItemDetailContainer - Carrito