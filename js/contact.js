$(document).ready(function () {
  "use strict";

  $("#contactForm").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      subject: {
        required: true,
        minlength: 4,
      },
      phone: {
        required: true,
        minlength: 10,
      },
      email: {
        required: true,
        email: true,
      },
      message: {
        required: true,
        minlength: 20,
      },
    },

    messages: {
      name: {
        required: "Por favor, informe seu nome.",
        minlength: "Seu nome deve ter pelo menos 2 caracteres.",
      },
      subject: {
        required: "Por favor, informe um assunto.",
        minlength: "O assunto deve ter pelo menos 4 caracteres.",
      },
      phone: {
        required: "Por favor, informe seu telefone.",
        minlength: "Informe um telefone válido.",
      },
      email: {
        required: "Por favor, informe seu e-mail.",
        email: "Informe um e-mail válido.",
      },
      message: {
        required: "Por favor, escreva uma mensagem.",
        minlength: "Sua mensagem deve ter pelo menos 20 caracteres.",
      },
    },

    submitHandler: function (form) {
      $(form).ajaxSubmit({
        type: "POST",
        data: $(form).serialize(),
        url: "contact_process.php",

        success: function () {
          $("#contactForm :input").attr("disabled", "disabled");

          $("#contactForm").fadeTo("slow", 1, function () {
            $(this).find(":input").attr("disabled", "disabled");
            $(this).find("label").css("cursor", "default");

            $("#success").fadeIn();

            $(".modal").modal("hide");
            $("#success").modal("show");
          });
        },

        error: function () {
          $("#contactForm").fadeTo("slow", 1, function () {
            $("#error").fadeIn();

            $(".modal").modal("hide");
            $("#error").modal("show");
          });
        },
      });
    },
  });
});
