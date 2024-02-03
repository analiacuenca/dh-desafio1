// Configuración inicial de Blockly
Blockly.Blocks["saludar"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("saludar")
      .appendField(new Blockly.FieldTextInput("nombre"), "NAME");
    this.setPreviousStatement(true, null);
    this.setColour(260);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

// 1era opcion Generador para el bloque "saludar"
javascript.javascriptGenerator.forBlock["saludar"] = function (
  block,
  generator
) {
  var text_name = block.getFieldValue("NAME");
  // TODO: Assemble javascript into code variable.
  var code = `alert("¡Hola, ${text_name}!");\n`;
  // var code = `"${text_name}"`
  return code;
  // return [code, Order.ATOMIC];
};



// Configuración de la caja de herramientas con el bloque "saludar"
const toolboxDefinicion = {
  kind: "flyoutToolbox",
  contents: [
    {
      kind: "block",
      type: "saludar",
    },
  ],
};

//  Inyecta al espacio de trabajo de Blocky
const workspace = Blockly.inject("blocklyDiv", {
  toolbox: toolboxDefinicion,
});

// Asigna la función ejecutarCodigo al evento click del botón
document
  .getElementById("ejecutarBtn")
  .addEventListener("click", ejecutarCodigo);

// Función para ejecutar el código generado por el usuario
function ejecutarCodigo() {
  // Obtiene el código JavaScript generado por los bloques en el workspace
  var codigo = Blockly.JavaScript.workspaceToCode(workspace);

  // Ejecuta el código usando eval
  eval(codigo);
  // Reasocia el evento click al botón
  document
    .getElementById("ejecutarBtn")
    .addEventListener("click", ejecutarCodigo);
}
