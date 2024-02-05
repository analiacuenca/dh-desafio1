// Configuración bloque saludar
Blockly.Blocks["block_saludar"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("saludar")
      .appendField(new Blockly.FieldTextInput("nombre"), "NAME");
    this.setColour(135);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

// Configuración bloque preguntar
Blockly.Blocks["block_preguntar"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("preguntar")
      .appendField(new Blockly.FieldTextInput("¿?"), "PREGUNTA");
    this.setColour(345);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};


// Configuración bloque sumar
Blockly.Blocks['block_sumar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("sumar")
        .appendField(new Blockly.FieldTextInput("numA"), "A")
        .appendField("+")
        .appendField(new Blockly.FieldTextInput("numB"), "B");
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// generador de código para el bloque "saludar"
javascript.javascriptGenerator.forBlock["block_saludar"] = function (
  block,
  generator
) {
  var text_name = block.getFieldValue("NAME");
  var codigo = `alert("¡Hola, ${text_name}!");\n`;
  // eval(codigo);
  return codigo;
};

// generador de código para el bloque "preguntar"
javascript.javascriptGenerator.forBlock["block_preguntar"] = function (
  block,
  generator
) {
  var text_pregunta = block.getFieldValue("PREGUNTA");
  var code = `prompt("Inserte su pregunta", "${text_pregunta}");\n`;
  return code;
};

// generador de código para el bloque "preguntar"
javascript.javascriptGenerator.forBlock["block_sumar"] = function (
  block,
  generator
) {
  var numeroA = block.getFieldValue("A");
  var numeroB = block.getFieldValue("B");
  var code = `resultado = ${numeroA} + ${numeroB}\n`;
  var sumatoria = parseInt(numeroA) + parseInt(numeroB);
  code += `alert("El resultado de tu suma: ${sumatoria}");\n`;
  return code;
};

// Configuración de la caja de herramientas con el bloque "saludar"
const toolboxDefinicion = {
  kind: "flyoutToolbox",
  contents: [
    {
      kind: "block",
      type: "block_saludar",
    },
    {
      kind: "block",
      type: "block_preguntar",
    },
    {
      kind: "block",
      type: "block_sumar",
    }
  ],
};

//  Inyección al espacio de trabajo de Blocky y las bloques dentro de la toolbox
const workspace = Blockly.inject("blocklyDiv", {
  toolbox: toolboxDefinicion,
});


function ejecutarCodigo() {
  // Obtengo el código JavaScript generado por los bloques en el workspace
  var codigo = Blockly.JavaScript.workspaceToCode(workspace);

  try {
    eval(codigo);
    document.getElementById("CodigoResultante").value = codigo;
  } catch (error) {
    document.getElementById("CodigoResultante").value =
      "Error al ejecutar el código: " + error;
  }
}
