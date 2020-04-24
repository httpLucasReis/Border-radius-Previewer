function preview() {
  // Params for radius
  let topLeft = document.getElementById("radiusTL").value,
    topRight = document.getElementById("radiusTR").value,
    bottomLeft = document.getElementById("radiusBR").value,
    bottomRight = document.getElementById("radiusBL").value,
    radiusfall = document.getElementById("radiusALL").value;
    radius = document.getElementById("res");

  let block = document.createElement("div");
  block.setAttribute("id", "block");
  let params = document.createElement("p");
  params.setAttribute("id", "parametros");

  let noneInput =
    Number(topLeft) +
    Number(topRight) +
    Number(bottomLeft) +
    Number(bottomRight);

  radius.innerHTML = "";

  if (noneInput + Number(radiusfall) == 0) {              // Caso todos os parametros estejam vazios

    block.style.borderRadius = '0px';
    radius.appendChild(block);
    params.innerText = '0px';
    radius.appendChild(params);

  }

  else if (noneInput == 0 && radiusfall.length != 0) {  // Caso o somente o parametro all estaja preenchido

    block.style.borderRadius = `${radiusfall}px`;
    radius.appendChild(block);
    params.innerText = `${radiusfall}px`;
    radius.appendChild(params);

  } else {                                             // Caso os parametros normais estejam preenchidos

    if (topLeft.length == 0) {
      topLeft = "0";
    }

    if (topRight.length == 0) {
      topRight = "0";
    }

    if (bottomLeft.length == 0) {
      bottomLeft = "0";
    }

    if (bottomRight.length == 0) {
      bottomRight = "0";
    }

    block.style.borderRadius = `${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px`;
    radius.appendChild(block);
    params.innerText = `${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px`;
    radius.appendChild(params);
  }
}


function clearAll() {                                                                       // Função para limpar tudo
  document.getElementById("radiusTL").value = "";
  document.getElementById("radiusTR").value = "";
  document.getElementById("radiusBR").value = "";
  document.getElementById("radiusBL").value = "";
  document.getElementById("radiusALL").value = "";
  document.getElementById("res").innerHTML = "";
}
