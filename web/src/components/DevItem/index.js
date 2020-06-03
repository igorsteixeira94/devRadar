import React from 'react';
import { DevLink, DevAvatar, DevName, DevTechs, DevBio } from './styles';

const DevItem = ({ dev }) => {
  return (
    <li>
      <DevLink
        target="_blank"
        href={`https://github.com/${dev.github_username}`}
      >
        <DevAvatar src={dev.avatar_url} alt="avatar" />
        <DevName>{dev.name}</DevName>
        <DevTechs>{dev.techs.join(',')}</DevTechs>
        <DevBio>{dev.bio}</DevBio>
      </DevLink>
    </li>
  );
};

export default DevItem;
