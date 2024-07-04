import { Outlet } from "react-router-dom";
import React from 'react';
import Header from "../Header";
import { Footer } from "../Footer";
import { Wrapper, MainContent } from './styled';
import { FilterBar } from "../FilterBar";
import { useAppSelector } from "@root/hooks/hooks";

export const Layout = () => {
  const { currentMovie } = useAppSelector(state => state.movie);
  return (
    <Wrapper>
      <Header />
      <MainContent>
        {!currentMovie && <FilterBar />}
        <Outlet />
      </MainContent>
      <Footer />
    </Wrapper>
  )
}
