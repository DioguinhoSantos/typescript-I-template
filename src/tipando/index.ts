function buscarCarrosPorMarca(frota: {}[], marca: string) {
  if (marca === undefined) {
    return frota
  }

  return frota.filter(
    (carro: {}) => {
      return carro.marca === marca
    }
  )
}