console.log("Nuttawut Butsadakham")
console.log("Denz")
function appendToScreen(value) {
    document.getElementById('screen').value += value;
  }

  function clearScreen() {
    document.getElementById('screen').value = '';
  }

  function calculate() {
    try {
      const result = eval(document.getElementById('screen').value);
      document.getElementById('screen').value = result;
    } catch (e) {
      document.getElementById('screen').value = 'Error';
    }
  }
