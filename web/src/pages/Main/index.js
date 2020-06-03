import React, { useState, useEffect, useCallback } from 'react';
import {
  Form,
  Title,
  FormInput,
  FormCoord,
  MainWrapper,
  DevWrapper,
} from './styles';
import api from '../../services/api';

const Main = () => {
  const [github_username, setGitHub] = useState('');
  const [techs, setTechs] = useState('');
  const [devs, setDevs] = useState([]);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { coords } = position;
        setLatitude(coords.latitude);
        setLongitude(coords.longitude);
      },
      (err) => {
        console.log(err);
      },
      { timeout: 3000 }
    );
  }, []);

  useEffect(() => {
    async function loadDev() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDev();
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
    setDevs([...devs, response.data]);
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
          {devs.map((dev) => (
            <li key={dev._id}>
              <a href={`https://github.com/${dev.github_username}`}>
                <img src={dev.avatar_url} alt="avatar" />
                <span>{dev.name}</span>
                <small>{dev.techs}</small>
                <p>{dev.bio}</p>
              </a>
            </li>
          ))}
        </ul>
      </DevWrapper>
    </MainWrapper>
  );
};

export default Main;
