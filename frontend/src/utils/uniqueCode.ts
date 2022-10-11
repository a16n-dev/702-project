const storageKey = 'unique-code';

export const getUniqueCode = (length: number = 8) => {
  const storedCode = localStorage.getItem(storageKey);

  if (storedCode) {
    return storedCode;
  } else {
    const code = (Math.random() * Math.pow(10, length))

      .toFixed(0)
      .padStart(length, '0');

    localStorage.setItem(storageKey, code);

    return code;
  }
};
