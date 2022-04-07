/*Dealing with loading pydiode*/
async function initPydiode() {
  const pyodide = await loadPyodide({
    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.19.1/full/",
  });
  pyodide.globals.set("print", (x) => x);
  return pyodide;
}
let pyodideReadyPromise = initPydiode();

/* Dealing with code execution*/
async function executeCode() {
  let pyodide = await pyodideReadyPromise;
  let code = document.getElementById("code-area").value;
  try {
    await pyodide.loadPackagesFromImports(code);
    let output = await pyodide.runPythonAsync(code);
    addToOutput(output);
  } catch (err) {
    addToOutput(err);
  }
}

async function resetVariables(){
  let pyodide = await pyodideReadyPromise;
  await pyodide.globals.clear();
}

function clearCodeArea(){
  document.getElementById("code-area").value = "";
}
