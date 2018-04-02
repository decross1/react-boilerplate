/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  startProjectHeader: {
    id: 'boilerplate.containers.HomePage.start_project.header',
    defaultMessage: 'Need help remembering events throughout the day?',
  },
  startProjectMessage: {
    id: 'boilerplate.containers.HomePage.start_project.message',
    defaultMessage: 'The project aims to be a lightweight application for viewing saved messages.',
  },
  trymeHeader: {
    id: 'boilerplate.containers.HomePage.tryme.header',
    defaultMessage: 'Enter New Messages Below!',
  },
  trymeMessage: {
    id: 'boilerplate.containers.HomePage.tryme.message',
    defaultMessage: 'Enter new message here: ',
  },
});
