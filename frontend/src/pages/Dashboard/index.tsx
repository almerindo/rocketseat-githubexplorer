import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositories on GitHub</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit"> Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/554495?s=460&u=ba5325b6341280d81ff751d7fde7f4a1bccd07f9&v=4"
            alt="Almerindo Rehem"
          />
          <div>
            <strong>sanar/errorhandler</strong>
            <p>
              Make simple and easy your error in Sentry! Semantic Sentry Error
              Repot.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/554495?s=460&u=ba5325b6341280d81ff751d7fde7f4a1bccd07f9&v=4"
            alt="Almerindo Rehem"
          />
          <div>
            <strong>sanar/errorhandler</strong>
            <p>
              Make simple and easy your error in Sentry! Semantic Sentry Error
              Repot.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/554495?s=460&u=ba5325b6341280d81ff751d7fde7f4a1bccd07f9&v=4"
            alt="Almerindo Rehem"
          />
          <div>
            <strong>sanar/errorhandler</strong>
            <p>
              Make simple and easy your error in Sentry! Semantic Sentry Error
              Repot.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
