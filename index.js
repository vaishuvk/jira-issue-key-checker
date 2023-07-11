const core = require("@actions/core");
const github = require("@actions/github");

const jiraPrefix = core.getInput("jira-prefix");

async function run() {
  try {
    const prTitle = github.context.payload.pull_request.title;
    const prBody = github.context.payload.pull_request.body;

    let regex = new RegExp(`${jiraPrefix}-[0-9]+`);
    if (!regex.test(prTitle)) {
      core.setFailed("Jira Issue Key missing in PR title.");
      return;
    }
  } catch (error) {
    core.info(error);
  }
}

run();
