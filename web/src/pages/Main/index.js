import React, { useState, useEffect, useCallback } from 'react';
import { Form, Title, FormInput, FormCoord,MainWrapper,DevWrapper } from './styles';
import api from '../../services/api';

const Main = () => {
  const [github_username, setGitHub] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      { timeout: 3000 }
    );
  }, []);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    const response = await api.post(
      `/devs?latitude=${latitude}&longitude=${longitude}`,
      {
        github_username,
        techs,
      }
    );
    setGitHub('');
    setTechs('');
  });

  return (
    <MainWrapper>
    <Form onSubmit={handleSubmit}>
      <Title>DevRadar</Title>
      <FormInput>
        <span>GitHub</span>
        <input
          name="github_username"
          id="github_username"
          placeholder="Ex.: igorsteixeira94"
          value={github_username}
          onChange={(e) => setGitHub(e.target.value)}
          required
        />
      </FormInput>
      <FormInput>
        <span>Techs</span>
        <input
          name="techs"
          id="techs"
          placeholder="Ex.: ReactJs, NodeJS, VueJS"
          value={techs}
          onChange={(e) => setTechs(e.target.value)}
          required
        />
      </FormInput>
      <FormCoord>
        <FormInput>
          <span>Latitude</span>
          <input
            type="number"
            name="latitude"
            id="latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            required
          />
        </FormInput>
        <FormInput>
          <span>Longitude</span>
          <input
            type="number"
            name="longitude"
            id="longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            required
          />
        </FormInput>
      </FormCoord>

      <button type="submit">Cadastrar</button>
    </Form>
    <DevWrapper>
      <ul>
      <li>
        <img src="https://avatars0.githubusercontent.com/u/47749249?v=4" alt="avatar"></img>
        <span>Igor Rodrigues</span>
        <small>React, NodeJs</small>
        <p>Cientista da Computação ! FullStack Js</p>
      </li>
      <li>
        <img src="https://avatars0.githubusercontent.com/u/47749249?v=4" alt="avatar"></img>
        <span>Igor Rodrigues</span>
        <small>React, NodeJs</small>
        <p>Cientista da Computação ! FullStack Js</p>
      </li>
    </ul></DevWrapper>

    </MainWrapper>
  );
};

export default Main;
