document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.cotacts__form');
  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  validation
    .addField('.name', [{
        rule: 'minLength',
        value: 3,
        errorsContainer: '.errors-container',
        errorMessage: "Имя слишком короткое"
      },
      {
        rule: 'maxLength',
        value: 10,
        errorMessage: "Имя слишком длинное"
      }
    ])
    .addField('.tel', [{
      rule: "function",
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10
      },
      errorMessage: 'Номер не из 10-ти цифр',
    }]);
})
