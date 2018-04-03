/**
 *
 * Archive
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectArchive, makeSelectErr } from './selectors';
import { loadArchive } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

// Import Styled Components used for Design
import H2 from '../../components/H2';
import H3 from '../../components/H3';

export class Archive extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.renderMessages();
  }
  render() {
    return (
      <div>
        <H2>
          <FormattedMessage {...messages.header} />
        </H2>
        <ul>
          {this.props.archive.messagesMod.map((message) => <H3 key={message._id}>{message.message} </H3>)} 
        </ul>
      </div>
    );
  }
}

Archive.propTypes = {
  err: PropTypes.bool,
  renderMessages: PropTypes.func,
  archive: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  archive: makeSelectArchive(),
  err: makeSelectErr(),
});

function mapDispatchToProps(dispatch) {
  return {
    renderMessages: () => { dispatch(loadArchive()); },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'archive', reducer });
const withSaga = injectSaga({ key: 'archive', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Archive);
