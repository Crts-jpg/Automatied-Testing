function tambah(a, b) {
    return a + b;
    
}

const manualTesting = (num1, num2, hasil) => {
    const sum = num1 + num2;
    if (sum !== hasil) {
      throw new Error(`ekspektasinya dapat ${hasil}, tapi kenapa dapat ${sum}`);
    }
    return sum;
  }
  
  try {
    const result = manualTesting(1, 1, 2);
    console.log("hasil sudah sesuai"); // Output: 2
  } catch (error) {
    console.error(error.message);
  }

module.exports = tambah;
