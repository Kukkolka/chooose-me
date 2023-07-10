const fs = require('fs');

// Function to update the db.json file
function updateDb(data) {
  // Read the current content of db.json
  const db = JSON.parse(fs.readFileSync('db.json', 'utf8'));

  // Update the data in the db object
  // For example, assuming your data contains a property called "name"
  db.name = data.name;

  // Write the updated content back to db.json
  fs.writeFileSync('db.json', JSON.stringify(db, null, 2));

  console.log('db.json has been updated.');
}

module.exports = updateDb;
