import { TFrota, frota } from './frota'

function buscarCarrosPorMarca(frota: TFrota[], marca: string) {
  if (marca === undefined) {
    return frota
  }

  return frota.filter(
    (carro) => {
      return carro.marca === marca
    }
  )
}

console.log(buscarCarrosPorMarca(frota, 'Chevrolet'))