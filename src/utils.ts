function formatter(input: string) {
  return input
    .toLowerCase()
    .replace(/\n/g, " ")
    .replace(/[.,\/#!$%\^&\*;:{}=_`\"~()]/g, " ") // Özel karakterleri boşlukla değiştir
    .split(" ");
}

export { formatter };
