import Dev from '../models/Dev';
import api from '../../services/api';
import {findConnections, sendMessage} from '../../services/websocket';

class DevController {

  async store(request, response) {
    try {
      const { github_username, techs } = request.body;

      const {
        data: { avatar_url, name, bio },
      } = await api.get(github_username);

      const { latitude, longitude } = request.query;
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

      const dev = await Dev.create({
        name,
        avatar_url,
        bio,
        github_username,
        techs,
        location,
      });

      const sendSocketMessageTo = findConnections({latitude,longitude},techs)

      sendMessage(sendSocketMessageTo,'new-dev',dev);

      return response.json(dev);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async index(request, response) {
    try {

      const devs = await Dev.find();

      return response.json(devs);

    } catch (error) {

      return response.status(400).json(error.message);

    }
  }
}

export default new DevController();
