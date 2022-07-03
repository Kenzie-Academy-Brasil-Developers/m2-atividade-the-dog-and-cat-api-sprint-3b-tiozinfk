class CardDogs {
  static urlAPI = "https://api.thedogapi.com/v1/images/search";
  static async get() {
    let response = await fetch(this.urlAPI);
    let data = await response.json();
    return data;
  }

  static async DogURL() {
    const response = await this.get();
    const data = await response[0].url;
    return data;
  }
}

class CardCats {
  static urlAPI = "https://api.thecatapi.com/v1/images/search";
  static async get() {
    let response = await fetch(this.urlAPI);
    let data = await response.json();
    return data;
  }

  static async CatURL() {
    const response = await this.get();
    const data = await response[0].url;
    return data;
  }
}


const div = document.querySelector(".geradorAleatorio")
div.addEventListener('click', ImgAleatoria)

const divCat = document.querySelector(".geradorGato")
divCat.addEventListener('click', ImgAleatoria)


function ImgAleatoria(event){

    if(event.target.id === 'getCat_input'){

         imgCat();
    }else
    if (event.target.id === 'getDog_input'){

        imgDog();
    }

}

async function imgCat(){

const img = document.querySelector('#imgCat')
const data = await CardCats.CatURL()
img.src = `${data}`

}

async function imgDog(){

const img = document.querySelector('#imgDog')
const data = await CardDogs.DogURL();
img.src = `${data}`

}

imgDog();
imgCat();