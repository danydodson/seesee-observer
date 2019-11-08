const casual = require("casual");
const { red, cyan, time, timeEnd } = require("../config/chalk");
const { Age, AgeWithIndex } = require("../models/Exe");

function populate(amount) {
  const docs = [...new Array(amount)].map(_ => ({
    email: casual.email,
    name: casual.name,
    age: casual.integer(0, 100),
    details: casual.array_of_integers(100),
    birth_date: new Date(casual.date("YYYY-MM-DD"))
  }));
  return Promise.all([AgeWithIndex.insertMany(docs), Age.insertMany(docs)]);
}

async function clean(amount) {
  cyan(`removing ${amount} users from db...`);
  await Promise.all([AgeWithIndex.deleteMany({}), Age.deleteMany({})]);
  cyan(`cleaning complete`);
}

async function restart(amount) {
  cyan(`seeding ${amount} users to db...`);
  await populate(amount);
  cyan(`seeding complete`);
}

async function seed(amount) {
  try {
    await clean(amount);
    await restart(amount);

    const query = { age: { $gt: 22 } };
    // const query = { favoriteFruit: "potato" };

    time("default_query");
    await Age.find(query);
    timeEnd("default_query");

    time("query_with_index");
    await AgeWithIndex.find(query);
    timeEnd("query_with_index");

    time("query_with_select");
    await Age.find(query).select({ name: 1, _id: 1, age: 1, email: 1 });
    timeEnd("query_with_select");

    time("query_with_select_index");
    await AgeWithIndex.find(query).select({
      name: 1,
      _id: 1,
      age: 1,
      email: 1
    });
    timeEnd("query_with_select_index");

    time("lean_query");
    await Age.find(query).lean();
    timeEnd("lean_query");

    time("lean_with_index");
    await AgeWithIndex.find(query).lean();
    timeEnd("lean_with_index");

    time("lean_with_select");
    await Age.find(query)
      .select({ name: 1, _id: 1, age: 1, email: 1 })
      .lean();
    timeEnd("lean_with_select");

    time("lean_select_index");
    await AgeWithIndex.find(query)
      .select({ name: 1, _id: 1, age: 1, email: 1 })
      .lean();
    timeEnd("lean_select_index");

    process.exit(0);
  } catch (err) {
    red(err);
  }
}

module.exports = seed;
