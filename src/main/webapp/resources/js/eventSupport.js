/**
 * Created by user on 29.07.16.
 */
EventSupport = function() {

    this.trigger = function(event, data) {
        $(this).trigger(event, data);
    };

    this.subscribe = function(event, fn, context) {
        $(this).on(event, $.proxy(fn, context))
    };

};