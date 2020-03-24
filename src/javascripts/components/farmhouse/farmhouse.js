import farmerData from '../../helpers/data/farmerData';
import utils from '../../helpers/utils';
import farmerComponent from '../farmers/farmer';

const buildFarmers = () => {
  farmerData.getFarmers()
    .then((farmers) => {
      let domString = '';
      domString += '<h2 class="text-center"> Farmhouse </h2>';
      domString += '<div class="d-flex flex-wrap">';
      farmers.forEach((farmer) => {
        domString += farmerComponent.farmerMaker(farmer);
      });
      domString += '</div>';
      utils.printToDom('farmhouse', domString);
    })
    .catch((err) => console.error('broken', err));
};

export default { buildFarmers };
