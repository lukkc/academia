var FormaPagamento = (function () {
    var $selectFormaPagamento = $(".js-select__formaPagamento");
    var $divCredito = $(".js-cartaoCredito");
    var $divDebito = $(".js-cartaoDebito");

    function selectPagamento() {

        $selectFormaPagamento.on("change", function () {

            if ($selectFormaPagamento.val() === "credito") {
                $divCredito.removeClass("is-hidden");
            } else {
                if (!$divCredito.hasClass("is-hidden")) {
                    $divCredito.addClass("is-hidden");
                }
            }

            if ($selectFormaPagamento.val() === "debito") {
                $divDebito.removeClass("is-hidden");
            } else {
                if (!$divDebito.hasClass("is-hidden")) {
                    $divDebito.addClass("is-hidden");
                }
            }
        });

    }


    return {
        listen: function () {
            selectPagamento();
        }
    }


}());


(function main() {

    FormaPagamento.listen();
}());
