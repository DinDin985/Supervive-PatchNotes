function formatPascalCase(str: string) {
  return (str[0].toUpperCase() + str.slice(1)).split(/(?=[A-Z])/).join(" ");
}

function formatCamelCase(str: string) {
  console.log(str);
  return str
    .replace(/[^a-zA-Z0-9+]/g, " ")
    .split(" ")
    .map((word, i) => {
      console.log(word[0]);
      return i === 0
        ? word[0].toLowerCase() + word.slice(1)
        : word[0].toUpperCase() + word.slice(1);
    })
    .join("");
}

export { formatCamelCase, formatPascalCase };
