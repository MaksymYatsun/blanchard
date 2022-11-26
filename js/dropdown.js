const parameters = {
  btnClassName: "js-header-dropdown-btn",
  dropClassName: "js-header-drop",
  activeClassName: "dropdown-is-active",
  disabledClassName: "is-disabled"
};

function onDisable(evt) {
  if (evt.target.classList.contains(parameters.disabledClassName)) {
    evt.target.classList.remove(
      parameters.disabledClassName,
      parameters.activeClassName
    );
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(
      `.${parameters.btnClassName}.${parameters.activeClassName}, .${parameters.dropClassName}.${parameters.activeClassName}`
    );

    if (
      activeElements.length &&
      !evt.target.closest(`.${parameters.activeClassName}`)
    ) {
      activeElements.forEach((current) => {
        if (current.classList.contains(parameters.btnClassName)) {
          current.classList.remove(parameters.activeClassName);
        } else {
          current.classList.add(parameters.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${parameters.btnClassName}`)) {
      const btn = evt.target.closest(`.${parameters.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(
        `.${parameters.dropClassName}[data-target="${path}"]`
      );

      btn.classList.toggle(parameters.activeClassName);

      if (!drop.classList.contains(parameters.activeClassName)) {
        drop.classList.add(parameters.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(parameters.disabledClassName);
      }
    }
  });
}

setMenuListener();
