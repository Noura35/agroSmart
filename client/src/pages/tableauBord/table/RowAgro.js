import React from 'react'

const RowAgro = ({TempHuitHeure,TemperatureDouzeHeure,TemperatureDixNeufHeure,HumiditeHuitHeure,HumiditeDouzeHeure , HumiditeDixNeufHeure, MoyTemperature }) => {
    return (
      <>
        <tr>
      <th scope="row">1</th>
      <td>{TempHuitHeure}</td>
      <td>{TemperatureDouzeHeure}</td>
      <td>{TemperatureDixNeufHeure}</td>
      </tr>
      <tr>
      <th scope="row">1</th>
      <td>{HumiditeHuitHeure}</td>
      <td>{HumiditeDouzeHeure}</td>
      <td>{HumiditeDixNeufHeure}</td>
    </tr>
      <tr>
      <th scope="row">1</th>
      <td>{MoyTemperature}</td>
    </tr>
      </>
  
  )
}

export default RowAgro
