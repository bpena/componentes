(function() {
    'use strict';

    angular
        .module('directivas', ['ui.bootstrap'])
        .directive('typeahead', myTypeahead);

    function myTypeahead() {
        return {
            restrict: 'E',
            replace: true,
/*            template:  '<div>\
                            <h4>{{label}}</h4>\
                            <input type="text" ng-model="ngModel" placeholder="{{placeholder}}"\
                                uib-typeahead="address for address in datasource($viewValue)"\
                                typeahead-loading="loadingLocations" typeahead-no-results="noResults"\
                                class="form-control">\
                            <i ng-show="loadingLocations" class="glyphicon glyphicon-refresh"></i>\
                            <div ng-show="noResults">\
                                <i class="glyphicon glyphicon-remove"></i> No Results Found\
                            </div>\
                        </div>',*/
            template:  '<div class="demo-section k-content" ng-controller="MyCtrl">\
                            <h4>{{label}}</h4>\
                            <input kendo-auto-complete ng-model="ngModel" k-data-source="datasource" \
                                style="width: 100%;" />\
                        </div>',
            scope: {
                label: '@',
                ngModel: '=',
                placeholder: '@',
                datasource: '='
            }
        }
    }
})();