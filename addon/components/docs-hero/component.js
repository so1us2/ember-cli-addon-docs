import Component from '@ember/component';
import layout from './template';

/**
  A component that renders a hero banner. Useful for your docs site's homepage.

  @class DocsHero
  @public
*/
export default Component.extend({
  layout,

  classNames: 'docs-hero',

  /*
    @property logo
    @public
  */
  logo: '',
  'slim-heading': '',
  'strong-heading': '',
  'byline': '',
});
