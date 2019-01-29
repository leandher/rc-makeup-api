import React, { Component } from 'react';
import { is } from 'immutable';
import { Search } from 'react-feather';
import Select from 'react-select';

import { Segment } from '../../../../components';
import styles from './Filter.module.css';
import './select.css';

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
      <div className={styles.Fields_Container}>
        <div className={styles.Field}>
          <div className={styles.Field_Label}>
            <span title="Products' Tags">Tags:</span>
          </div>
          <div className={styles.Field_Input}>
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
      <div className={styles.Button_Container}>
        <button type="button" onClick={() => onSearch(filter)} className={styles.Button}>
          <span className={styles.Button_Content}>
            <Search color="white" size={24} />
          </span>
          <span className={styles.Button_Overlay} />
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
