import utils from '../../helpers/utils';

const showForm = () => {
  let domString = '';
  domString += '<h2 class="text-center"> New Cow </h2>';
  domString += '<form class="col-10 offset-1">';
  domString += '<div class="form-group">';
  domString += '<label for="cow-name">Name</label>';
  domString += '<input type="text" class="form-control" id="cow-name">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="cow-breed">Breed</label>';
  domString += '<input type="text" class="form-control" id="cow-breed">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="cow-location">Location</label>';
  domString += '<input type="text" class="form-control" id="cow-location"';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="cow-weight">Weight (lbs) </label>';
  domString += '<input type="number" class="form-control" id="exampleInputPassword1">';
  domString += '</div>';
  domString += '<button type="submit" class="btn btn-dark" id="cow-creator">Add Cow</button>';
  domString += '</form>';
  utils.printToDom('new-cow', domString);
};

export default { showForm };
