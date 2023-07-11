const blockEventLoop = () => {
  const largeObject = {};

  // Add a large number of properties to the object
  for (let i = 0; i < 10e6; i++) {
    largeObject[`property${i}`] = i;
  }

  const jsonString = JSON.stringify(largeObject); // Stringify the large JSON object
  const parsedObject = JSON.parse(jsonString); // Parse the JSON string back into an object

  console.log("Blocking complete"); // Log a message when the blocking operation is complete
};

export default function () {
  blockEventLoop();
}
