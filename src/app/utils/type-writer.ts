export function typerWriter(text: string, element: HTMLElement) {
  const textArray = text.split("");
  element.innerHTML = "";
  textArray.forEach((letter, index) => {
    setTimeout(() => (element.innerHTML += letter), 150 * index);
  });
}
