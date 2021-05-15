const webPush = require("web-push");

let publicKey =
  "BDU4UurBAZNurGxFFJCK9GDBJ-z7boocpepbMMGD6jVnk5FlIKr4vKMhW8q9UVAQPJ9Z2iKuFPcgtz9fCfqcp7w";
let privateKey = "ss0rPIxzEZP4K0BFGtlzfSg-Jrpft_dQ4innTkKvMLw";
webPush.setVapidDetails("mailto:test@test.com", publicKey, privateKey);

module.exports = { push: webPush };
