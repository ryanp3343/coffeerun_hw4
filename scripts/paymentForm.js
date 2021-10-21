(function (window) {
    'use strict';
    var App = window.App || {};

    function PaymentForm(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }
        this.$element = $(selector);
        if (this.$element.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    PaymentForm.prototype.addRow = function (payment) {
        var rowElement = new Row(payment);
        this.$element.append(rowElement.$element);
    }

    function Row(payment) {
        var $div = $('<div></div>', {
            'id': 'payment-validation',
            'class': 'modal'
        });

        var $label = $('<label></label>');
        var description = 'Thank you for your order,';
        description += ' ' + payment.title
        description += ' ' + payment.username;
        $label.append(description);
        $div.append($label);
        this.$element = $div;
    }

    App.PaymentForm = PaymentForm;
    window.App = App;
})(window);