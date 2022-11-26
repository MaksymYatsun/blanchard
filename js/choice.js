const defaultSelect = () => {
  const element = document.querySelector('.choice');
  const choices = new Choices(element, {
    placeholder: false,
    placeholderValue: null,
    searchEnabled: false,
  });
};

defaultSelect ();
