import mercury from "@mercury-js/core";
export const TodoSchema = {
  text: {
    type: "string",
  },
  star: {
    type: "boolean"
  },
  status: {
    type: "boolean"
  }
};

export const Todo = mercury.createModel("Todo", TodoSchema, {});

// declare module "@mercury-js/core" {
//   interface DB {
//     Todo: { name: string; user: string };
//   }
// }
