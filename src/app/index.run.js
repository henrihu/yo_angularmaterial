(function() {
  'use strict';

  angular
    .module('zeyoAngularmaterial')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
