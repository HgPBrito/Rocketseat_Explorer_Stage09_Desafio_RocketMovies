import { Container, SubHeader, NewMovie, Content } from "./styles";
import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";


export function Home() {
    return(
        <Container>
            <Header>
                <Input placeholder="Pesquisar pelo título" />
            </Header>

            <main>
            <SubHeader>
                <h1> Meus filmes </h1>
                <NewMovie to="/new">
                    <FiPlus />
                    Adicionar filme
                </NewMovie>
            </SubHeader>

            <Content> 
                <Section>
                    <Note data={{
                        title: 'Interestellar',
                        rating: 4,
                        description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper',
                        tags: [
                        {id: '1', name:'Ficção Científica'},
                        {id: '2', name:'Drama'},
                        {id: '3', name:'Família'}
                        ],
                    }}            
                    />
                    <Note data={{
                        title: 'Interestellar',
                        rating: 3,
                        description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper',
                        tags: [
                        {id: '1', name:'Ficção Científica'},
                        {id: '2', name:'Drama'},
                        {id: '3', name:'Família'}
                        ],
                    }}/>
                    <Note data={{
                        title: 'Interestellar',
                        rating: 5,
                        description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper',
                        tags: [
                        {id: '1', name:'Ficção Científica'},
                        {id: '2', name:'Drama'},
                        {id: '3', name:'Família'}
                        ],
                    }}/>
                    <Note data={{
                        title: 'Interestellar',
                        rating: 5,
                        description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper',
                        tags: [
                        {id: '1', name:'Ficção Científica'},
                        {id: '2', name:'Drama'},
                        {id: '3', name:'Família'}
                        ],
                    }}/>
                    <Note data={{
                        title: 'Interestellar',
                        rating: 5,
                        description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper',
                        tags: [
                        {id: '1', name:'Ficção Científica'},
                        {id: '2', name:'Drama'},
                        {id: '3', name:'Família'}
                        ],
                    }}/>

                    </Section>
                </Content>

            </main>

        </Container>
    )
}