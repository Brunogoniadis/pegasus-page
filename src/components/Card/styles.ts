import styled from "styled-components";

export const Container = styled.div`
  h2 {
    font-size: min(1.3em, 3vw);
    font-weight: 600;
  }

  h3 {
    font-size: min(1em, 2vw);
    font-weight: 400;
  }

  p {
    font-size: min(18px);
    font-weight: 600;
  }

  .cardContainer {
    height: 250px;
    width: 250px;
    max-width: 100%; /* Adicionando esta propriedade para tornar o card responsivo */
    overflow: hidden;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    background-color: #f3f3f3;
    color: var(--color-primary);
  }

  .logoContainer {
    width: 100%;
    height: auto; /* Mudando a altura para automático para acomodar diferentes tamanhos de imagem */
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      animation: logoCard 1.1s;
      max-width: 90px; /* Definindo uma largura máxima para a imagem */
      max-height: 90px; /* Definindo uma altura máxima para a imagem */
      background-size: cover;
      object-fit: contain;
    }
  }

  .textContainer {
    padding: 0px;
    .Title {
      text-align: center;
      margin-bottom: 1rem;
    }
  }

  .typeContainer {
    display: flex;
    gap: 10px;
  }
  .type {
    background-color: #2a292f;
    padding: 6px;
    border-radius: 25px;
    color: white;
  }

  @media (max-width: 512px) {
    p {
      font-size: 0.8em;
    }
    h3 {
      font-weight: bold;
    }
    .cardContainer {
      height: auto; /* Definindo altura automática para se ajustar ao conteúdo */
      width: 80%; /* Ajustando a largura para preencher a largura do contêiner pai */
      max-width: 100%;
      padding: 20px; /* Adicionando algum espaço interno */
    }
    .logoContainer {
      height: auto; /* Mudando a altura para automático para acomodar diferentes tamanhos de imagem */

      img {
        width: 100%; /* Definindo a largura da imagem para preencher a largura do contêiner pai */
        max-width: 70%; /* Definindo uma largura máxima para a imagem */
        @keyframes logoCard {
          from {
            width: 0%;
          }
          to {
            width: 70%; /* Alterando a largura da animação para corresponder ao máximo */
          }
        }
        animation: logoCard 2.5s;
      }
    }
  }
`;
