import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
      <h3 >{category}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <div className="card-grid">
        {images.map((image) => {
          return <GifItem
            key={image.id}
            {...image} //importante para pasar todos los props a la vez si tenemos muchos
          >
          </GifItem>
        })}

      </div>
    </>
  )
}
