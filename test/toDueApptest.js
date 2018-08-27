// ADD TODO TEST
// CHANGE A TODO
// TOGGLE A COMPLETED TODO

describe(`ToDue Application`, () => {
  it(`It should be able to add a todo  `, () => {
    todoList.addTodo(`item #1`);
    expect(todoList.todos[0].todoText).equal(`item #1`);
    todoList.todos = [];
  });

  it(`It should be able to change a todo  `, () => {
    todoList.addTodo(`item #1`);
    todoList.changeTodo(`item #1`, `item #1.5`);
    expect(todoList.todos[0].todoText).equal(`item #1.5`);
    todoList.todos = [];
  });

  it(`It should toggle a completed todo  `, () => {
    todoList.addTodo(`first`);
    todoList.addTodo(`second`);
    todoList.addTodo(`third`);
    todoList.toggleCompleted(`second`);
    expect(todoList.todos[1].completed).equal(true);
    todoList.todos = [];
  });

  it(`It should toggle all todos  `, () => {
    todoList.addTodo(`first`);
    todoList.addTodo(`second`);
    todoList.addTodo(`third`);
    todoList.toggleAll();

    let result = todoList.todos.every(todo => {
      return (todo.completed = true);
    });
    expect(result).equal(true);
    todoList.todos = [];
  });

  it(`It should delete a todo  `, () => {
    todoList.addTodo(`first`);
    todoList.addTodo(`second`);
    todoList.addTodo(`third`);
    todoList.deleteTodo(`first`);
    expect(todoList.todos.length).equal(2);
  });

  it(`It should have handlers object for to handle user interaction  `, () => {
    var result;
    if (handlers) {
      result = true;
    }
    expect(result).equal(true);
  });

  it(`It should have an views object to display todos to the page  `, () => {
    var result;
    if (views) {
      result = true;
    }
    expect(result).equal(true);
  });
});
