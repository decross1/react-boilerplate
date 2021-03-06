/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import H2 from 'components/H2';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Text from './Text';
import Section from './Section';
import messages from './messages';
import { changeMessage, archiveMessage } from './actions';
import { makeSelectMessage, makeSelectSuccess, makeSelectErr } from './selectors';
import reducer from './reducer';
import saga from './saga';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <article>
        <Helmet>
          <title>Message Archiver</title>
          <meta name="description" content="A React.js Web Application for Saving Messages" />
        </Helmet>
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.startProjectHeader} />
            </H2>
            <p>
              <FormattedMessage {...messages.startProjectMessage} />
            </p>
          </CenteredSection>
          <Section>
            <H2>
              <FormattedMessage {...messages.trymeHeader} />
            </H2>
            <Form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="message">
                <Text
                  cols={93}
                  rows={12}
                  id="message"
                  type="text"
                  placeholder="This is an example message..."
                  value={this.props.message}
                  onChange={this.props.onChangeMessage}
                />
              </label>
            </Form>
          </Section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  message: PropTypes.string,
  onChangeMessage: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeMessage: (evt) => dispatch(changeMessage(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(archiveMessage());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  message: makeSelectMessage(),
  success: makeSelectSuccess(),
  error: makeSelectErr(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
