Blockly.Dart['flutter_text'] = function(block) {
  var value_data = Blockly.Dart.valueToCode(block, 'data', Blockly.Dart.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'Text('+ value_data+')';
  Blockly.Dart.definitions_['import_material'] =
        'import \'package:flutter/material.dart\';';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Dart['runapp'] = function(block) {
  var value_name = Blockly.Dart.valueToCode(block, 'NAME', Blockly.Dart.ORDER_NONE);
  console.log(block);
  console.log(Blockly.Dart.valueToCode(block, 'NAME', Blockly.Dart.ORDER_NONE));
  // TODO: Assemble Dart into code variable.
  var code = 'runApp(' + value_name+');\n';
  return code;
};

Blockly.Dart['app'] = function(block) {
  var dropdown_type = block.getFieldValue('type');
  var value_home = Blockly.Dart.valueToCode(block, 'home', Blockly.Dart.ORDER_NONE);
  var value_title = Blockly.Dart.valueToCode(block, 'title', Blockly.Dart.ORDER_ATOMIC);
  console.log(block);
  if (dropdown_type == "MATERIAL") {
    code =  'MaterialApp(\n';
    if (value_title != "")
      code += '\t title:'+value_title +',\n';
    
    code += 'home:' + value_home + ',\n' +
    
    ')';
  } else 
    code = "Not implemented";
  return [code, Blockly.Dart.ORDER_NONE];
};

Blockly.Dart['scaffold'] = function(block) {
  var value_appbar = Blockly.Dart.valueToCode(block, 'appBar', Blockly.Dart.ORDER_NONE);
  var value_body = Blockly.Dart.valueToCode(block, 'body', Blockly.Dart.ORDER_NONE);
  var value_fab = Blockly.Dart.valueToCode(block, 'fab', Blockly.Dart.ORDER_NONE);
  
  var code = 'Scaffold(\n';
  console.log(value_appbar);
  if (value_appbar != "")
    code += '\t appBar: ' + value_appbar + ',\n';
  if (value_body != "")
    code += '\t body: ' + value_body + ',\n';

  if (value_fab != "")
    code += '\t floatingActionButton: ' + value_fab + ',\n';
  
  code +=  ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Dart.ORDER_NONE];
};

Blockly.Dart['appBar'] = function(block) {
  var value_title = Blockly.Dart.valueToCode(block, 'title', Blockly.Dart.ORDER_NONE);
  // TODO: Assemble Dart into code variable.
  var code = 'AppBar(' +"\n";
  if (value_title != "")
    code += '\t title: '+ value_title +"\n"; 
    
  code += ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Dart.ORDER_NONE];
};

Blockly.Dart['flutter_row'] = function(block) {
  var value_children = Blockly.Dart.valueToCode(block, 'children', Blockly.Dart.ORDER_NONE);
  // TODO: Assemble Dart into code variable.
  var code = "Row(\n";
  if (value_children != "") {
    code += "\t children: &lt;Widget&gt;";

  if (value_children.startsWith("["))
    code += value_children+"\n"
  else code += "[\n\t" + value_children + "]\n";
  }
  code += ")"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Dart.ORDER_NONE];
};

Blockly.Dart['flutter_column'] = function(block) {
  var value_children = Blockly.Dart.valueToCode(block, 'children', Blockly.Dart.ORDER_NONE);
  // TODO: Assemble Dart into code variable.
  var code = 'Column(\n';
    if (value_children != "") {
        code += "\t children: &lt;Widget&gt;";

    if (value_children.startsWith("["))
      code += value_children+"\n"
    else code += "[\n\t" + value_children + "]\n";
      
    }
  code += ")"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Dart.ORDER_NONE];
};

Blockly.Dart['flutter_listview'] = function(block) {
  var value_children = Blockly.Dart.valueToCode(block, 'children', Blockly.Dart.ORDER_NONE);
  // TODO: Assemble Dart into code variable.
  var code = 'ListView(\n';
    if (value_children != "") {
        code += "\t children: &lt;Widget&gt;";

    if (value_children.startsWith("["))
      code += value_children+"\n"
    else code += "[\n\t" + value_children + "]\n";
      
    }
  code += ")"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Dart.ORDER_NONE];
};


Blockly.Dart['flutter_icon'] = function(block) {
  var value_icon = Blockly.Dart.valueToCode(block, 'icon', Blockly.Dart.ORDER_NONE);
  var value_color = Blockly.Dart.valueToCode(block, 'color', Blockly.Dart.ORDER_ATOMIC);
  var value_size = Blockly.Dart.valueToCode(block, 'size', Blockly.Dart.ORDER_ATOMIC);
  // TODO: Assemble Dart into code variable.
  var code = 'Icon(\n';
  if (value_icon != "")
    code += "\t"+ value_icon+",\n";

  if (value_color != "")
    code += "\t color: const Color(0xFF"+value_color.slice(2,8).toUpperCase()+"), \n";
  if (value_size != "")
    code += "\t size: "+value_size+",\n";
  code += ")";
  return [code, Blockly.Dart.ORDER_NONE];
};

Blockly.Dart['flutter_icons'] = function(block) {
  var text_constant = block.getFieldValue('constant');
  // TODO: Assemble Dart into code variable.
  var code = "Icons."+text_constant;
  return [code, Blockly.Dart.ORDER_NONE];
};

Blockly.Dart['flutter_placeholder'] = function(block) {
  var colour_color = block.getFieldValue('color');
  var number_strokewidth = block.getFieldValue('strokeWidth');
  var number_fallbackwidth = block.getFieldValue('fallbackWidth');
  var number_fallbackheight = block.getFieldValue('fallbackHeight');
  // TODO: Assemble Dart into code variable.
  var code = "Placeholder( \n";
  code += "\tcolor: const Color(0xFF"+colour_color.slice(1).toUpperCase()+"), \n";
  code += "\tstrokeWidth: "+ number_strokewidth +", \n";
  code += "\tfallbackWidth: "+ number_fallbackwidth +", \n";
  code += "\tfallbackHeight: "+ number_fallbackheight +", \n";
  code += " )"
  return [code, Blockly.Dart.ORDER_NONE];
};

Blockly.Dart['flutter_raised_button'] = function(block) {
  var value_child = Blockly.Dart.valueToCode(block, 'child', Blockly.JavaScript.ORDER_ATOMIC);
  var statement_onPressed = Blockly.Dart.statementToCode(block, 'onPressed');

  var code = 'RaisedButton(\n';
  if (statement_onPressed != "")
    code += "\t onPressed: (){\n"+statement_onPressed+"},\n";
  else code += "\t onPressed: null,\n";
  
  code += "\t child: "+value_child+"\n";
  code += ")";
  return [code, Blockly.Dart.ORDER_NONE];
};

Blockly.Dart['flutter_fab'] = function(block) {
  var value_child = Blockly.Dart.valueToCode(block, 'child', Blockly.JavaScript.ORDER_ATOMIC);
  var statement_onPressed = Blockly.Dart.statementToCode(block, 'onPressed');

  var code = 'FloatingActionButton(\n';
  if (statement_onPressed != "")
    code += "\t onPressed: (){\n"+statement_onPressed+"},\n";
  else code += "\t onPressed: null,\n";
  
  if (value_child != "")
    code += "\t child: "+value_child+"\n";
  
  code += ")";
  return [code, Blockly.Dart.ORDER_NONE];
};


Blockly.Dart['flutter_stateless_widget'] = function(block) {
  Blockly.Dart.definitions_['import_material'] =
        'import \'package:flutter/material.dart\';';

  var text_classname = block.getFieldValue('classname');
  var value_content = Blockly.Dart.valueToCode(block, 'content', Blockly.Dart.ORDER_NONE);
  // TODO: Assemble Dart into code variable.
  var code = 'class '+text_classname+' extends StatelessWidget {\n';
  code += "\t@override\n";
  code += "\tWidget build(BuildContext context) {\n";

  code += "\t\treturn "+ value_content+";\n";

  code += "\t}\n";
  code += "}\n";
  return code;
};

Blockly.Dart['flutter_stateful_widget'] = function(block) {
  Blockly.Dart.definitions_['import_material'] =
        'import \'package:flutter/material.dart\';';

  var text_classname = block.getFieldValue('classname');
  var value_content = Blockly.Dart.valueToCode(block, 'content', Blockly.Dart.ORDER_NONE);
  var statement_vars = Blockly.Dart.statementToCode(block, 'vars');
  // Create stateful widget.
  var code = 'class '+text_classname+' extends StatefulWidget {\n';

  code += "\t@override\n";
  code += "\t_"+text_classname + "State createState() => _"+text_classname+"State();\n";
  code += "}\n\n";
  
  // Create state
  code += 'class _'+text_classname+'State extends State&lt;'+text_classname+'> {\n';
  code += statement_vars + "\n";
  code += "\t@override\n";
  code += "\tWidget build(BuildContext context) {\n";
  code += "\t\treturn "+ value_content+";\n";

  code += "\t}\n";
  code += "}\n";
  return code;
};

Blockly.Dart['flutter_create_instance'] = function(block) {
  var text_classname = block.getFieldValue('className');
  // TODO: Assemble Dart into code variable.
  var code = text_classname+'()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Dart.ORDER_NONE];
};

Blockly.Dart['flutter_container'] = function(block) {
  var value_width = Blockly.Dart.valueToCode(block, 'width', Blockly.Dart.ORDER_ATOMIC);
  var value_height = Blockly.Dart.valueToCode(block, 'height', Blockly.Dart.ORDER_ATOMIC);
  var value_color = Blockly.Dart.valueToCode(block, 'color', Blockly.Dart.ORDER_ATOMIC);
  var value_child = Blockly.Dart.valueToCode(block, 'child', Blockly.Dart.ORDER_ATOMIC);
  
  var code = 'Container(\n';
  if (value_color != "")
    code += "\t color: const Color(0xFF"+value_color.slice(2,8).toUpperCase()+"),\n";

  if (value_width != "")
    code += "\t width: "+value_width+",\n";
  if (value_height != "")
    code += "\t height: "+value_height+",\n";
  if (value_child != "")
    code += "\t child: "+value_child+"\n";
  code += ")";

  return [code, Blockly.Dart.ORDER_NONE];
};

Blockly.Dart['flutter_set_state_call'] = function(block) {
  var statements_code = Blockly.Dart.statementToCode(block, 'code');
  // TODO: Assemble Dart into code variable.
  var code = "setState(() {\n";
  code += statements_code +"\n";
  code += "});\n"

  return code;
};

Blockly.Dart['flutter_raw_input'] = function(block) {
  // Text value.
  var code = block.getFieldValue('code');
  return [code, Blockly.Dart.ORDER_ATOMIC];
};

Blockly.Dart['flutter_raw_statement'] = function(block) {
  // Text value.
  var code = block.getFieldValue('code');
  return code;
};