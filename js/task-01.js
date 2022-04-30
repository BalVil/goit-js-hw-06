const liItems = document.querySelectorAll("li.item");
const totalLiItems = liItems.length;
console.log(`Number of categories: ${totalLiItems}`);

for (const item of liItems) {
  const textItem = item.firstElementChild.textContent;
  console.log(`Category: ${textItem}`);

  const totalElementsInCategory = item.lastElementChild.children.length;
  console.log(`Elements: ${totalElementsInCategory}`);
}
