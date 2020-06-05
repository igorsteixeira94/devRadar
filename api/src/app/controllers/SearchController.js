import Dev from '../models/Dev';

class SearchController {
  async index(request, response) {
    try {
      const { techs, latitude, longitude } = request.query;

      const devs = await Dev.find({
        techs: {
          $in: techs,
        },
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [longitude, latitude],
            },
            $maxDistance: 1000,
          },
        },
      });
      return response.json(devs);

    } catch (error) {
      return response.status(400).json(error.message);
    }



  }
}

export default new SearchController();
