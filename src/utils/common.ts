import { AbilityDTO, StatDTO, TypeDTO } from "../dto/PokiDTO";

export const formattedPokiProfile = (data : any, urlForImage: string) => {
  return {
      id: data.id,
      name: data.name,
      species: {
          name: data.species.name,
          url: data.species.url,
      },
      image: urlForImage,
      height: data.height,
      weight: data.weight,
      base_exp: data.base_experience,
      stats: data.stats.map((poki: StatDTO) => (
          {
              name: poki.stat.name,
              base_stat: poki.base_stat,
          }
      )),
      abilities: data.abilities.map((poki: AbilityDTO) => (
          poki.ability.name
      )),
      types: data.types.map((poki: TypeDTO) => (
          poki.type.name
      ))
  }
}

export const capitalizeFirstLetter = (str?: string) => {
    if (str){
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  }

  export const dmToCm = (height?: number) => {
    if (height){
      return height*10;
    }
  }

  export const hgToKg = (weight?: number) => {
    if (weight) {
      return weight*0.1;
    }
  }

  export const getRandomColor = () => {
    let arrayOfColors = ["red" , "orange" ,"yellow",  "green" , "teal" ,"blue" ,"cyan", "purple" ,"pink" ,"linkedin" ,"facebook" ,"messenger" ,"whatsapp" ,"twitter" ,"telegram"]

    return arrayOfColors[Math.floor(Math.random() * arrayOfColors.length)];
  }