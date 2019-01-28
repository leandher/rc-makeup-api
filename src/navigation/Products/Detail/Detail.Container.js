import {
  compose, lifecycle, withPropsOnChange, withHandlers,
} from 'recompose';
import { withRouter } from 'react-router';
import { is } from 'immutable';

import Detail from './Detail';
import withMakeupContext from '../../../store/Makeup/Makeup.Consumer';

const handleLoadProduct = ({ findOne }) => ({ id }) => {
  findOne(id);
};

const receiveChanges = (prevProps, { match }) => {
  if (!is(prevProps.match, match)) {
    return true;
  }

  return false;
};

const propagateStateChangeToProps = ({ handleLoadProduct: loadProduct, match }) => {
  const { params } = match;
  loadProduct(params);
};

export default compose(
  withMakeupContext(),
  withRouter,
  withHandlers({
    handleLoadProduct,
  }),
  lifecycle({
    componentDidMount() {
      const { handleLoadProduct: loadProduct, match } = this.props;
      const { params } = match;

      loadProduct(params);
    },
  }),
  withPropsOnChange(receiveChanges, propagateStateChangeToProps),
)(Detail);
