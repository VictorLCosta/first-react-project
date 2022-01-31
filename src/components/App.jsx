import { React } from 'react';
import Subtitle from './Subtitle';

import Title from './Title';
import Navbar from './Navbar';
import BoxContainer from './layout/BoxContainer';
import Card from './layout/Card';
import Table from './layout/Table'
import ParentComponent from './layout/ParentComponent';
import Form from './layout/Form';
import Mega from './mega/Mega'

const App = () => {
    return (
        <>
            <Navbar></Navbar>
            <Title text="Funciona burro"></Title>
            <Subtitle text="Funcionou"></Subtitle>

            <BoxContainer>
                <Card src="/src/assets/img-1.jpg" />
                <Card />
                <Card />
            </BoxContainer>

            <Table />

            <ParentComponent></ParentComponent>

            <Form />

            <Mega></Mega>
        </>
    )
}

export default App