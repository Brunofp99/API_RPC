// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/rpc$1.0.0/src/view/programmes.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=utf-8><link rel=stylesheet href=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css integrity=sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO crossorigin=anonymous><title>API RPC</title></head><body><div class=container><h1>Programação</h1><form class=form-inline action=/?_method=GET method=POST><div class=\"form-group mx-3 mb-2\"><label for=inputData class=sr-only>Data da Programação</label><input type=text id=date name=date class=form-control placeholder=\"Ano - Mês - Dia\"></div><input type=submit value=Pesquisar class=\"btn btn-primary mb-2\"></form><table class=table><thead class=thead-dark><tr><th scope=col>Programa</th><th scope=col>inicio</th><th scope=col>fim</th><th scope=col>duração</th> <th scope=col>categoria</th> </tr></thead><tbody>");

  var $for$0 = 0;

  marko_forOf(data.entries, function(programa) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    if ((programa.human_start_time <= data.entries.current_time) && (programa.human_end_time >= data.entries.current_time)) {
      out.w("<tr class=bg-success><td scope=row>" +
        marko_escapeXml(programa.title) +
        "</td><td scope=row>" +
        marko_escapeXml(programa.human_start_time) +
        "</td><td scope=row>" +
        marko_escapeXml(programa.human_end_time) +
        "</td><td scope=row>" +
        marko_escapeXml(programa.duration_in_minutes) +
        " min</td><td scope=row>" +
        marko_escapeXml(programa.program.category) +
        "</td></tr>");
    } else {
      out.w("<tr><td scope=row>" +
        marko_escapeXml(programa.title) +
        "</td><td scope=row>" +
        marko_escapeXml(programa.human_start_time) +
        "</td><td scope=row>" +
        marko_escapeXml(programa.human_end_time) +
        "</td><td scope=row>" +
        marko_escapeXml(programa.duration_in_minutes) +
        " min</td><td scope=row>" +
        marko_escapeXml(programa.program.category) +
        "</td></tr>");
    }
  });

  out.w("</tbody></table></div><script src=https://code.jquery.com/jquery-3.3.1.slim.min.js integrity=sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo crossorigin=anonymous></script><script src=https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js integrity=sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49 crossorigin=anonymous></script><script src=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js integrity=sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy crossorigin=anonymous></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "34");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/rpc$1.0.0/src/view/programmes.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
