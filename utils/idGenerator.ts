const compListKeyID = (list: string, index: number) => {
  return String(list) + String(index) + String(Date.now());
};

const generateRandomID = (length = 20) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars.charAt(randomIndex);
  }
  return result;
};

export { compListKeyID, generateRandomID };
