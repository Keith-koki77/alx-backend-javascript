const fs = require('fs');

function countStudents(path) {
    try {
        // Read the CSV file synchronously
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.split('\n').filter(line => line.trim() !== ''); // Remove empty lines
        const fields = lines.shift().split(','); // Extract field names
        const students = {};

        // Initialize student counts for each field
        fields.forEach(field => {
            students[field] = [];
        });

        // Iterate over each line to count students in each field
        lines.forEach(line => {
            const values = line.split(',');
            fields.forEach((field, index) => {
                if (values[index].trim() !== '') {
                    students[field].push(values[index]);
                }
            });
        });

        // Log the number of students in each field and their list of names
        console.log(`Number of students: ${lines.length}`);
        fields.forEach(field => {
            console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
        });
    } catch (error) {
        // Log error if database file cannot be loaded
        console.error('Cannot load the database');
    }
}

module.exports = countStudents;
