import { Input } from './FilterInput.styled';
import PropTypes from 'prop-types';

const FilterInput = ({ onChange }) => {
  return (
    <>
      <Input type="text" name="filter" onChange={onChange} />
    </>
  );
};

export default FilterInput;

FilterInput.propTypes = {
  onChange: PropTypes.func,
};
