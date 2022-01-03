import { Component } from "../core/components.js";
import { Form } from "../core/form.js";
import { Validators } from "../core/validators.js";

export class CreateComponents extends Component {
  constructor(id) {
    super(id);
  }
  init() {
    this.$elem.addEventListener("submit", submitHandler.bind(this));
    //Инициализируем нашу форму. Создадим новый экземпляр
    this.form = new Form(this.$elem, {
      //Передаём ссылки на статические методы
      title: [Validators.required],
      fulltext: [Validators.required, Validators.minLength(8)],
    });
  }
}

async function submitHandler(event) {
  event.preventDefault();
  if (this.form.isValid()) {
    const formData = {
      // Значение select и date
      type: this.$elem.type.value,
      date: new Date().toLocaleDateString(),
      //Конвертируем все данные в один объект(title, fulltext)
      ...this.form.value(),
    };
    //await apiService.createPost(formData);
    this.form.clear();
    alert("Post created");
    // console.log("submit", formData);
  }
}
