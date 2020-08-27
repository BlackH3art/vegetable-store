export const GetMessages = (element) => {
  const messages = []; 
  if(element.validity.valueMissing) {
    messages.push("This form need value!");
  }
  if(element.validity.typeMismatch) {
    messages.push(`Incorrect type of value of ${element.type}`)
  }
  return messages;
}