import React from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage, PokemonPage, SearchPage } from './pages';
import Horario from './pages/Horario';
import Products from './pages/Products';
import Company from './pages/Company';
import Home from './pages/Home';


export const AppRouter = () => {
    return <Routes>
        <Route path='/' element={<Navigation />}>
            <Route index element={<HomePage />} />
            <Route path='pokemon/:id' element={<PokemonPage />}/>
            <Route path='search' element={<SearchPage />} />
            <Route path='horario/*' element={<Horario />} />
            <Route path='company/*' element={<Company />} />
            <Route path='products/*' element={<Products />} />
            <Route path='home/*' element={<Home />} />
        </Route>

        <Route path='*' element={<Navigate to='/' />} />
    </Routes>
}