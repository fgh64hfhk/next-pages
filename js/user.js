const user = {
  name: "Tony Lin",
  age: "30",
  city: "Taichung",
  tasks: ["reports", "meetings", "exercise"],

  getTaskList() {
    let count = 0;
    console.log("getTaskList fn:", this.name);

    return () => {
      console.log(`閉包中(${count})的 this:`, this.name);

      const taskList = this.tasks.map((task) => `- ${task}`).join("\n");

      count++;

      return `待辦事項：\n${taskList}`;
    };
  },
};

const lister = user.getTaskList();
console.log(lister());

function introduce(age, city) {
  console.log(
    `大家好，我是 ${this.name}，今年 ${this.age}歲，住在 ${this.city}。`
  );

  console.log(lister());
}

introduce.call(user, 35, "Taipei");
introduce.apply(user);
const bounded = introduce.bind(user);
bounded();
