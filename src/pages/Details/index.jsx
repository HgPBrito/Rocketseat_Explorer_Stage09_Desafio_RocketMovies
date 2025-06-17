import { FiArrowLeft, FiClock } from "react-icons/fi";

import {Container, Content} from "./styles";

import moment from 'moment-timezone';


import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { Rating } from "../../components/Rating";

export function Details() {

  const datePost = moment.utc("2013-11-18 11:55").tz("America/Sao_Paulo").format("DD/MM/YYYY");
  const hoursPost = moment.utc("2013-11-18 11:55").tz("America/Sao_Paulo").format("HH:mm"); 
  const formattedDate = datePost + ' às ' + hoursPost;

  return (
    <Container>      

      <Header>
        <Input placeholder="Pesquisar pelo título" />
      </Header>

      <main>
        <Content>  

          <ButtonText>
            <FiArrowLeft />
            Voltar
          </ButtonText>

          <div>
            <h1>Nome do Filme</h1>
            <Rating grade='4' isBigSize />
          </div>

          <div className="movie-info">
            <p>
              <img src="https://github.com/hgpbrito.png" alt="Foto do usuário." />
              Por HgPBrito
            </p>

            <div>
              <FiClock />

              <p>{formattedDate}</p>
            </div>
          </div>

          <Section>
            <Tag title="Ficção Cientfica"/>
            <Tag title="Drama"/>
            <Tag title="Família"/>
          </Section>

            <div class='description'>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit ea doloribus nostrum nam molestiae animi adipisci vero cumque porro quisquam nesciunt a, dignissimos delectus corrupti et dolorum! Consequatur, alias repellendus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates vel, soluta nemo, molestiae commodi sunt sequi aut vitae qui minus eos consectetur reprehenderit necessitatibus harum recusandae! Ipsa quisquam consequatur consequuntur!

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa commodi officia voluptatem deleniti placeat perferendis numquam magnam sint porro autem! Quisquam quas rerum sequi nisi corporis iste animi, obcaecati reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam expedita ullam, facilis neque blanditiis unde quaerat nostrum a nobis animi labore laboriosam maiores dolores velit rem porro reprehenderit ut molestiae?

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, doloremque magnam corporis neque officia quo tempora eius molestias eum voluptates in deleniti. Omnis quasi repellat nemo, aperiam ea nulla reprehenderit!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam natus nemo temporibus earum error dolore exercitationem ab necessitatibus unde ex voluptatem assumenda recusandae enim, fuga quisquam, facere doloremque cum eum?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit ea doloribus nostrum nam molestiae animi adipisci vero cumque porro quisquam nesciunt a, dignissimos delectus corrupti et dolorum! Consequatur, alias repellendus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates vel, soluta nemo, molestiae commodi sunt sequi aut vitae qui minus eos consectetur reprehenderit necessitatibus harum recusandae! Ipsa quisquam consequatur consequuntur!
              </p>
            </div>

        </Content>
      </main>
    </Container>   

  )
};