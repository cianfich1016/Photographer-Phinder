const controller = require("./photographersController");
(async function test() {
  let response = await controller.login({
    body: {
      email: "simplyclass@test.com",
      password: "ilovephotos",
    },
  });
  console.log(response);
})();
