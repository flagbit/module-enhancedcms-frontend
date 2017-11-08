define(['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    exports.default = function ($window, $document, $timeout) {

        return {
            restrict: 'C',
            controller: 'ContainerWidgetController',
            controllerAs: 'ctrl',
            scope: true
        };
    };
});
