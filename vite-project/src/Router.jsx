import { Route, Routes } from 'react-router-dom';

import { Inicial, SobreNos, Error404 } from './pages';
import { LayoutPadrao } from './layouts';
;


const Router = () => {
    return(
        <Routes>
            <Route path='/' element={<LayoutPadrao/>}>    
                <Route path="/" element={ <Inicial/> }/>
                <Route path="/SobreNos" element={ <SobreNos/> }/>
                <Route path='*' element={<Error404/>}/>
            </Route>
            
        </Routes>
    );
};

export { Router }