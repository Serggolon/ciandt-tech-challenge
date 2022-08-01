import React from "react";
import styled from "styled-components";

import Header from "../header";
import PokemonPage from "../pages";
import Footer from "../footer";

import ApiPokedex from "../../services";

const ApiPokedexContext = React.createContext();

const apiPokedexService = new ApiPokedex();

const App = () => {
  return (
    <ApiPokedexContext.Provider value={apiPokedexService}>
      <AppContainer>
        <Header />
        <PokemonPage />
        <Footer />
      </AppContainer>
    </ApiPokedexContext.Provider>
  );
}

const AppContainer = styled.div`
  width: 90%;
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
`;

export { App, ApiPokedexContext };
