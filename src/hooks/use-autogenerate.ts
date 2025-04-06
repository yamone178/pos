export const generateInvoiceNumber = (): string => {
    const timestamp = Date.now(); // Current timestamp
    const randomValue = Math.floor(Math.random() * 1000); // Random value between 0-999
    return `INV-${timestamp}-${randomValue}`;
  };

 export const generateVoucherCode = (length: number = 4): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters[randomIndex];
    }
    return code;
  };

