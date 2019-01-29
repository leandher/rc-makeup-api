import React, { Component } from 'react';
import { is } from 'immutable';
import { Search } from 'react-feather';
import Select from 'react-select';

import { Segment } from '../../../../components';
import './Filter.css';

type Props = {
  tags: Array<{}>,
  defaultFilters: any,
  onSearch: () => {},
};
class Filter extends Component<Props> {
  state = {
    filter: {},
  };

  componentDidUpdate(prevProps) {
    (() => {
      const { tags, defaultFilters } = this.props;
      if (is(prevProps.defaultFilters, defaultFilters)) return;
      const { product_tags: productTags } = defaultFilters;

      let defaultValues = [];

      if (productTags) {
        defaultValues = productTags.split(',');
        this.select.setValue(
          tags.filter(tag => defaultValues.indexOf(tag.value) !== -1),
          'set-value',
        );
      }
    })();
  }

  handleChange = items => {
    const { filter } = this.state;

    let formatedValues = '';

    items.forEach(item => {
      formatedValues += `${item.value},`;
    });

    this.setState({ filter: { ...filter, product_tags: formatedValues } });
  };

  renderFields = () => {
    const { tags } = this.props;

    return (
      <div className="Fields-Container">
        <div className="Field">
          <div className="Field-Label">
            <span title="Products' Tags">Tags:</span>
          </div>
          <div className="Field-Input">
            <Select
              ref={ref => {
                if (ref) {
                  this.select = ref.select;
                }
              }}
              isMulti
              options={tags}
              classNamePrefix="select"
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  };

  renderSearchButton = () => {
    const { onSearch } = this.props;
    const { filter } = this.state;

    return (
      <div className="Button-Container">
        <button type="button" onClick={() => onSearch(filter)} className="Button">
          <span className="Button-Content">
            <Search color="white" size={24} />
          </span>
          <span className="Button-Overlay" />
        </button>
      </div>
    );
  };

  render() {
    return (
      <Segment>
        {this.renderFields()}
        {this.renderSearchButton()}
      </Segment>
    );
  }
}

export default Filter;
