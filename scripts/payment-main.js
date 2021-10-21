(function (window) {
    'use strict'
    var FORM_SELECTOR = '[payment-validation="form"]';
    var BOX_SELECTOR = '[payment-validation="modal"]';
    var App = window.App;
    var FormHandler = App.FormHandler;
    var PaymentForm = App.PaymentForm;
    var paymentForm = new PaymentForm(BOX_SELECTOR);
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(function (data) {
        paymentForm.addRow.call(paymentForm, data);
        $('#payment-validation').modal();
    });
})(window);