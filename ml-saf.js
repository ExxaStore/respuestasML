var htmlContent = '';

htmlContent += '<style>';
htmlContent += '.overlay {';
htmlContent += '    height: 100%;';
htmlContent += '    width: 0;';
htmlContent += '    position: fixed;';
htmlContent += '    z-index: 99;';
htmlContent += '    top: 0;';
htmlContent += '    left: 0;';
htmlContent += '    background-color: rgb(0,0,0);';
htmlContent += '    background-color: rgba(0,0,0, 0.9);';
htmlContent += '    overflow-x: hidden;';
htmlContent += '    transition: 0.5s;';
htmlContent += '}';

htmlContent += '.overlay-content {';
htmlContent += '    position: relative;';
htmlContent += '    top: 5%;';
htmlContent += '    width: 100%;';
htmlContent += '    text-align: center;';
htmlContent += '    margin-top: 30px;';
htmlContent += '}';

htmlContent += '.overlay a {';
htmlContent += '    padding: 8px;';
htmlContent += '    text-decoration: none;';
htmlContent += '    font-size: 14px;';
htmlContent += '    color: #818181;';
htmlContent += '    display: block;';
htmlContent += '    transition: 0.3s;';
htmlContent += '}';

htmlContent += '.overlay a:hover, .overlay a:focus {';
htmlContent += '    color: #f1f1f1;';
htmlContent += '}';

htmlContent += '.overlay .closebtn {';
htmlContent += '    position: absolute;';
htmlContent += '    top: 20px;';
htmlContent += '    right: 45px;';
htmlContent += '    font-size: 60px;';
htmlContent += '}';

htmlContent += '@media screen and (max-height: 450px) {';
htmlContent += '  .overlay a {font-size: 20px}';
htmlContent += '  .overlay .closebtn {';
htmlContent += '    font-size: 40px;';
htmlContent += '    top: 15px;';
htmlContent += '    right: 35px;';
htmlContent += '  }';
htmlContent += '}';
htmlContent += '</style>';

htmlContent += '<div id="myNav" class="overlay">';
htmlContent += '  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>';
htmlContent += '  <div class="overlay-content">';
htmlContent += '    <a href="javascript:updateAnswer(\'Gracias por tu consulta. Sí tenemos el producto en stock. Saludos, Saftoys.com\');">Con Stock</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Gracias por tu consulta. Sí tenemos el producto en stock para entrega inmediata. Saftoys.com\');">Con Stock Inmediato</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Gracias por tu consulta. Lamentablemente nos quedamos sin stock de este producto, podemos ofrecerte otro similar? Saludos, Saftoys.com\');">Sin stock</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Gracias por tu consulta. Sí lo soporta. Saludos, Saftoys.com\');">Si lo soporta</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Gracias por tu consulta. No, no lo soporta. Saludos, Saftoys.com\');">No lo soporta</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Gracias por tu consulta. Nuestro horario de atención es de Lunes a Viernes de 10 a 18. Saludos, Saftoys.com\');">Horarios</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Gracias por tu consulta. Estamos en Balvanera, a metros de la estación Humberto 1 del Subte H. Saludos, Saftoys.com\');">Ubicacion</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Gracias por tu consulta. Mercadolibre no nos permite pasar datos de contacto. Saludos, Saftoys.com\');">No pasar datos</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Hola y muchas gracias por tu compra. Saludos, Saftoys.com\');">Esqueleto</a>';
htmlContent += '    <a href="#"><hr></a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Hola y muchas gracias por tu compra. Queríamos consultarte si vas a pasar a retirar tu producto por nuestras oficinas? Estamos de Lunes a Viernes de 10 a 18 en Av. Jujuy 1039, esquina Estados Unidos, Balvanera. Si va a retirarlo otra persona, por favor indicanos su nombre y documento. O te gustaría que te lo enviemos por moto o por OCA? Por último, querés pasarnos tu dirección de email así podemos tenerte al tanto de nuestras ofertas. Saludos, Saftoys.com\');">Retira</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Hola y muchas gracias por tu compra. Hoy mismo estaremos llevando tu producto a OCA. Te adjunto la factura de tu producto en formato digital junto a la garantía del mismo. Por último, querés pasarnos tu dirección de email así podemos tenerte al tanto de nuestras ofertas. Saludos, Saftoys.com\');">Envio OCA hoy CON Factura</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Hola y muchas gracias por tu compra. A la brevedad estaremos llevando tu producto a OCA. Te adjunto la factura de tu producto en formato digital junto a la garantía del mismo. Por último, querés pasarnos tu dirección de email así podemos tenerte al tanto de nuestras ofertas. Saludos, Saftoys.com\');">Envio OCA brevedad CON Factura</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Hola y muchas gracias por tu compra. Hoy mismo estaremos llevando tu producto a OCA. Por último, querés pasarnos tu dirección de email así podemos tenerte al tanto de nuestras ofertas. Saludos, Saftoys.com\');">Envio OCA hoy SIN Factura</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Hola y muchas gracias por tu compra. A la brevedad estaremos llevando tu producto a OCA. Por último, querés pasarnos tu dirección de email así podemos tenerte al tanto de nuestras ofertas. Saludos, Saftoys.com\');">Envio OCA brevedad SIN Factura</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Hola, te adjuntamos en este email la factura de compra en formato digital la que incluye también la garantía del producto. Cualquier otra cosa que necesites, por favor dejánoslo saber. Saludos, Saftoys.com\');">Envio Factura</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'No podemos facturar tu compra porque no nos figura tu documento, podrías por favor decirnos tu número de DNI? Saludos, Saftoys.com\');">DNI Mal</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Intentamos llamarte a tu teléfono de contacto pero no pudimos comunicarnos. Podrías por favor contactanos al teléfono fijo (11)4011-8800. Saludos, Saftoys.com\');">Telefono mal</a>';


htmlContent += '  </div>';
htmlContent += '</div>';
htmlContent += '<span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>';

htmlContent += '<script>';
htmlContent += '    function openNav() {';
htmlContent += '        document.getElementById("myNav").style.width = "20%";';
htmlContent += '    }';

htmlContent += '    function closeNav() {';
htmlContent += '        document.getElementById("myNav").style.width = "0%";';
htmlContent += '    }';

htmlContent += 'function updateAnswer(answerText) {';
//htmlContent += '    $("textarea[data-js=\'question-replay__textarea\']:eq(0)").val(answerText);';

htmlContent += 'if ($("textarea[data-js=\'question-replay__textarea\']:eq(0)").length != 0) {';
htmlContent += '    $("textarea[data-js=\'question-replay__textarea\']:eq(0)").val(answerText);';
htmlContent += '    }';

htmlContent += 'if ($(\'#sectionMessages iframe\').contents().find(\'textarea\').length != 0) {';
htmlContent += '    $(\'#sectionMessages iframe\').contents().find(\'textarea\').val(answerText);';
htmlContent += '    }';

htmlContent += 'if ($("textarea[name=\'txtNewMessage\']:eq(0)").length != 0) {';
htmlContent += '    $("textarea[name=\'txtNewMessage\']:eq(0)").val(answerText);';
htmlContent += '    $("button[class=\'ch-btn message-controls__action-primary\']").prop( "disabled", false );';
htmlContent += '    }';

htmlContent += '}';

htmlContent += 'openNav();'

htmlContent += '</script>';

/*
$("p[data-js='question-row-text']").html().trim() <-- obtiene el texto de la pregunta (cuando hay una sola)
$("textarea[data-js='question-replay__textarea']").val() <-- obtiene el texto del text area de la respuesta (cuando hay una sola)
$("textarea[data-js='question-replay__textarea']").val("setea el valor") <-- setea el texto del text area de la respuesta (cuando hay una sola)
$("textarea[data-js='question-replay__textarea']:eq(0)").val("que miras gil??") <-- setea el texto del text area de la respuesta (opción 0 de las N posibles)
*/

$("body").append(htmlContent);
