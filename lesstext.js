angular.module( 'lessText', [] )

.directive( 'lessText', function ( sridService ) {
    return {
        template: '<span>{{display_text}}</span><span ng-if="show_more">' +
            '...<a style="color: blue;" ng-click="toggle()">More</a></span>',
        scope: {
            text: '@text',
            maxChars: '@maxChars'
        },
        link: function ( scope, element, attrs ) {
            var watcher = scope.$watch( 'text', function () {
                if ( scope.maxChars == undefined ) scope.maxChars = 256
                if ( scope.text == undefined ) return
                scope.show_more = false
                scope.display_text = scope.text
                if ( scope.text.length > scope.maxChars ) {
                    scope.display_text = scope.text.substring( 0, scope.maxChars )
                    scope.show_more = true
                }
                watcher = null
            } )
            scope.toggle = function () {
                scope.display_text = scope.text
                scope.show_more = false
            }

        }
    };
} )
