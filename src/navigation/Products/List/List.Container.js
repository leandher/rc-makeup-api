import {
  compose, lifecycle, withHandlers, withState, withPropsOnChange,
} from 'recompose';
import { is } from 'immutable';
import { withRouter } from 'react-router';
import querystring from 'querystring';

import List from './List';
import { Makeup as MakeupContext } from '../../../store';

const { withMakeupContext } = MakeupContext;

const handleFilter = ({ history }) => filters => {
  const filterUrlify = querystring.stringify(filters);
  history.push(`/list/${filterUrlify}`);
};

const handleApplyFilters = ({ loadProducts, changeDefaultFilters }) => ({ filter }) => {
  changeDefaultFilters(querystring.parse(filter));
  loadProducts(filter);
};

const receiveChanges = (prevProps, { match }) => {
  if (!is(prevProps.match, match)) {
    return true;
  }

  return false;
};

const propagateStateChangeToProps = ({ handleApplyFilters: applyFilters, match }) => {
  const { params } = match;
  applyFilters(params);
};

export default compose(
  withMakeupContext(),
  withRouter,
  withState('defaultFilters', 'changeDefaultFilters', {}),
  withHandlers({
    handleFilter,
    handleApplyFilters,
  }),
  lifecycle({
    componentDidMount() {
      const { handleApplyFilters: applyFilters, match } = this.props;
      const { params } = match;
      applyFilters(params);
    },
  }),
  withPropsOnChange(receiveChanges, propagateStateChangeToProps),
)(List);
