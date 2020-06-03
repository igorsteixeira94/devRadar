import React, { useState, useCallback, useEffect } from 'react';
import {
  Form,
  Title,
  FormInput,
  InputTitle,
  Input,
  FormCoord,
  Button,
} from './styles';

const FormDev = ({ onSubmit }) => {
  const [github_username, setGitHub] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    // eslint-disable-next-line no-undef
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

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    await onSubmit({ latitude, longitude, github_username, techs });
    setGitHub('');
    setTechs('');
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Title>DevRadar</Title>
      <FormInput>
        <InputTitle>GitHub</InputTitle>
        <Input
          name="github_username"
          id="github_username"
          placeholder="Ex.: igorsteixeira94"
          value={github_username}
          onChange={(e) => setGitHub(e.target.value)}
          required
        />
      </FormInput>
      <FormInput>
        <InputTitle>Techs</InputTitle>
        <Input
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
          <InputTitle>Latitude</InputTitle>
          <Input
            type="number"
            name="latitude"
            id="latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            required
          />
        </FormInput>
        <FormInput>
          <InputTitle>Longitude</InputTitle>
          <Input
            type="number"
            name="longitude"
            id="longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            required
          />
        </FormInput>
      </FormCoord>

      <Button type="submit">Cadastrar</Button>
    </Form>
  );
};

export default FormDev;
