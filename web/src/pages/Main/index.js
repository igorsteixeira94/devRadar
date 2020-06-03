import React, { useState, useEffect, useCallback } from 'react';
import { MainWrapper, DevWrapper, DevList } from './styles';
import api from '../../services/api';
import DevItem from '../../components/DevItem';
import FormDev from '../../components/Form';

const Main = () => {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDev() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDev();
  }, []);

  const handleSubmit = useCallback(async (data) => {
    const { latitude, longitude, github_username, techs } = data;
    const response = await api.post(
      `/devs?latitude=${latitude}&longitude=${longitude}`,
      {
        github_username,
        techs: techs.split(','),
      }
    );
    setDevs([...devs, response.data]);
  });

  return (
    <MainWrapper>
      <FormDev onSubmit={handleSubmit} />
      <DevWrapper>
        <DevList>
          {devs.map((dev) => (
            // eslint-disable-next-line no-underscore-dangle
            <DevItem key={dev._id} dev={dev} />
          ))}
        </DevList>
      </DevWrapper>
    </MainWrapper>
  );
};

export default Main;
