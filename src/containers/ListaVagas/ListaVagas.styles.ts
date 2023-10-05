// src/containers/ListaVagas/ListaVagas.styles.ts
import styled from 'styled-components'

export const ListaVagasContainer = styled.div`
  /* Adicione os estilos desejados para o container da lista de vagas */
`

export const VagasUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
