<template>
  <div id="app">
    <div>
      <img
        class="img-responsive img-logo"
        src="@/assets/todolist.png"
        alt="todo image"
      />
    </div>
    <div class="container grid-xs py-2">
      <form @submit.prevent="addtodo(todo)">
        <div class="input-group">
          <input
            v-model="todo.description"
            type="text"
            class="form-input"
            placeholder="Nova Tarefa"
          />
          <button class="btn btn-primary input-group-btn">Adicionar</button>
        </div>
      </form>

      <div class="todo-list">
        <todo
          v-for="t in todos"
          :key="t.id"
          @toggle="toggleTodo"
          @remove="removeTodo"
          :todo="t"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "./components/Todo";

export default {
  name: "App",
  components: { Todo },
  data() {
    return { todos: [], todo: { checked: false } };
  },
  methods: {
    addtodo(todo) {
      todo.id = Date.now();
      this.todos.push(todo);
      this.todo = { checked: false };
    },
    toggleTodo(todo) {
      const index = this.todos.findIndex((item) => item.id === todo.id);
      if (index > -1) {
        const checked = !this.todos[index].checked;
        this.$set(this.todos, index, { ...this.todos[index], checked });
      }
    },
    removeTodo(todo) {
      const index = this.todos.findIndex((item) => item.id === todo.id);
      if (index > -1) {
        this.$delete(this.todos, index);
      }
    },
  },
};
</script>


<style scoped>

.img-logo {
  max-width: 400px;
  margin: 0 auto;
}

</style>