import Axios from 'axios';
import cowData from '../../helpers/data/cowData';
import utils from '../../helpers/utils';
import cowComponent from '../cow/cow';


const removeCow = (e) => {
  const cowId = e.target.closest('.card').id;
  console.error('cowId', cowId);
  cowData.delete(cowId)
  // eslint-disable-next-line indent
  .then((response) => {
      buildCows();
    })
    .catch((err) => console.error('could not delete cow', err));
};

const buildCows = () => {
  cowData.getCows()
    .then((cows) => {
      let domString = '';
      domString += '<h2 class="text-center"> Pasture </h2>';
      domString += '<div class="d-flex flex-wrap">';
      cows.forEach((cow) => {
        domString += cowComponent.cowMaker(cow);
      });
      domString += '</div>';
      utils.printToDom('pasture', domString);
      $('body').on('click', '.delete-cow', removeCow);
    })
    .catch((err) => console.error('get cows broke', err));
};
const deleteCow = (cowId) => Axios.delete(`${baseUrl}/cows/${cowId}.json`);
export default { buildCows };
