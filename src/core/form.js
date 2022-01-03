export class Form {
  constructor(form, controls) {
    this.form = form;
    this.controls = controls;
  }
  value() {
    const VALUE = {};
    Object.keys(this.controls).forEach((control) => {
      VALUE[control] = this.form[control].value;
    });
    return VALUE;
  }

  clear() {
    Object.keys(this.controls).forEach((control) => {
      this.form[control].value = "";
    });
  }

  isValid() {
    let isFormValid = true;
    Object.keys(this.controls).forEach((control) => {
      const VALIDATORS = this.controls[control]; //Получаем список валидаторов из массива
      let isValid = true; //Создаём переменную для конкретного валидатора
      VALIDATORS.forEach((validator) => {
        isValid = validator(this.form[control].value) && isValid; //Валиден ли текущий контрол, переопределяем переменную isValid. Достаём значение поля. Также учтём валидность предыдущего поля ввода. Даже если один из них будет ложный-валидация не сработает.
      });
      if (!isValid) {
        setError(this.form[control]);
      } else {
        clearError(this.form[control]);
      }
      isFormValid = isFormValid && isValid; //Также переопределяем значение, учитывая предыдущее значение валидатора.
    });
    return isFormValid;
  }
}

function setError($control) {
  clearError($control);
  const ERROR = `<p class='validation-error'>Fill in all the input fields</p>`;
  $control.classList.add("invalid");
  $control.insertAdjacentHTML("afterend", ERROR);
}

function clearError($control) {
  $control.classList.remove("invalid");
  if ($control.nextSibling) {
    $control.closest(".form-control").removeChild($control.nextSibling);
  }
}
