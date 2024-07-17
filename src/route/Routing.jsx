import React from 'react';
import { PUBLIC_ROUTES } from './RouteList';
import { Routes, Route } from 'react-router-dom';

export default function Routing() {
    return (
        PUBLIC_ROUTES.map(data => 
            <Routes key={data.id}>
                <Route path={data.path} element={<data.element />} />
            </Routes>
        )
    )
}
