import { connectClient, stopClient } from "../server/db";

async function main() {
  const client = await connectClient();

  await client.collection("test_data").deleteMany({});

  const resp = await client.collection("test_data").insertMany([
    {
      id: "how-we-help-page",
      uri: "features/lightwell/HowWeHelpPage.feature",
      keyword: "Feature",
      name: "How We Help Page",
      description: "",
      line: 1,
      elements: [
        {
          id: "how-we-help-page;navigate-to-how-we-help-page",
          keyword: "Scenario",
          name: "Navigate to How We Help Page",
          description: "",
          line: 3,
          type: "scenario",
          steps: [
            {
              keyword: "Given ",
              name: 'I am on the "home" page',
              line: 4,
              match: {
                location: "features/lightwell/step_definitions/my_steps.rb:8",
              },
              result: {
                status: "passed",
                duration: 117700,
              },
            },
            {
              keyword: "And ",
              name: "I navigate to page",
              line: 5,
              match: {
                location: "features/lightwell/step_definitions/my_steps.rb:3",
              },
              result: {
                status: "passed",
                duration: 1284031700,
              },
            },
            {
              keyword: "When ",
              name: 'I click on the "find out how button"',
              line: 6,
              match: {
                location: "features/lightwell/step_definitions/my_steps.rb:12",
              },
              result: {
                status: "passed",
                duration: 126880300,
              },
            },
            {
              keyword: "And ",
              name: 'I am on the "how we help" page',
              line: 7,
              match: {
                location: "features/lightwell/step_definitions/my_steps.rb:8",
              },
              result: {
                status: "passed",
                duration: 62000,
              },
            },
            {
              keyword: "Then ",
              name: 'I see the "how we help header"',
              line: 8,
              match: {
                location: "features/lightwell/step_definitions/my_steps.rb:16",
              },
              result: {
                status: "passed",
                duration: 4796447000,
              },
            },
          ],
          tags: [
            {
              name: "@run",
              line: 2,
            },
          ],
          before: [
            {
              match: {
                location: "features/utils/hook.rb:3",
              },
              result: {
                status: "passed",
                duration: 1872298800,
              },
            },
          ],
          after: [
            {
              match: {
                location: "features/utils/hook.rb:12",
              },
              result: {
                status: "passed",
                duration: 312103400,
              },
            },
          ],
        },
      ],
    },
    {
      id: "Failed Test",
      uri: "features/lightwell/HowWeHelpPage.feature",
      keyword: "Feature",
      name: "How We Fail",
      description: "",
      line: 1,
      elements: [
        {
          id: "how-we-fail-page;navigate-to-how-we-help-page",
          keyword: "Scenario",
          name: "Navigate to How We Help Page",
          description: "",
          line: 3,
          type: "scenario",
          steps: [
            {
              keyword: "Given ",
              name: 'I am on the "home" page',
              line: 4,
              match: {
                location: "features/lightwell/step_definitions/my_steps.rb:8",
              },
              result: {
                status: "passed",
                duration: 117700,
              },
            },
            {
              keyword: "And ",
              name: "I navigate to page",
              line: 5,
              match: {
                location: "features/lightwell/step_definitions/my_steps.rb:3",
              },
              result: {
                status: "passed",
                duration: 1284031700,
              },
            },
            {
              keyword: "When ",
              name: 'I click on the "find out how button"',
              line: 6,
              match: {
                location: "features/lightwell/step_definitions/my_steps.rb:12",
              },
              result: {
                status: "passed",
                duration: 126880300,
              },
            },
            {
              keyword: "And ",
              name: 'I am on the "how we help" page',
              line: 7,
              match: {
                location: "features/lightwell/step_definitions/my_steps.rb:8",
              },
              result: {
                status: "passed",
                duration: 62000,
              },
            },
            {
              keyword: "Then ",
              name: 'I see the "how we help header"',
              line: 8,
              match: {
                location: "features/lightwell/step_definitions/my_steps.rb:16",
              },
              result: {
                status: "failed",
                duration: 4796447000,
              },
            },
          ],
          tags: [
            {
              name: "@run",
              line: 2,
            },
          ],
          before: [
            {
              match: {
                location: "features/utils/hook.rb:3",
              },
              result: {
                status: "passed",
                duration: 1872298800,
              },
            },
          ],
          after: [
            {
              match: {
                location: "features/utils/hook.rb:12",
              },
              result: {
                status: "failed",
                duration: 312103400,
              },
            },
          ],
        },
      ],
    },
  ]);

  console.info("Inserted Contests:", resp.insertedCount);

  stopClient();
}

main();
