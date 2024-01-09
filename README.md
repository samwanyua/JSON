# Working with JSON in JavaScript

This repository provides a guide on how to create JSON objects and arrays in JavaScript and demonstrates how to make an Ajax request to a `.json` file.

## JSON Overview

**JSON (JavaScript Object Notation):** JSON is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is a common data format with diverse uses in electronic data interchange, including web development.

In JavaScript, JSON is represented as a combination of objects and arrays. JSON objects are enclosed in curly braces `{}`, and JSON arrays are ordered lists of values enclosed in square brackets `[]`.

## Creating JSON Objects

JSON objects in JavaScript are created using object literals. Example:

```javascript
// Creating a JSON object
const person = {
    "name": "John Doe",
    "age": 30,
    "city": "Example City",
    "isActive": true
};
