export function maskCpf(v: string) {
  if (!v) return;
  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  v = v.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
  v = v.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
  //de novo (para o segundo bloco de números)
  v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos
  return v;
}

export function maskCnpj(v: string) {
  if (!v) return;
  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/, "$1.$2"); //Coloca ponto entre o segundo e o terceiro dígitos
  v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3"); //Coloca ponto entre o quinto e o sexto dígitos
  v = v.replace(/\.(\d{3})(\d)/, ".$1/$2"); //Coloca uma barra entre o oitavo e o nono dígitos
  v = v.replace(/(\d{4})(\d)/, "$1-$2"); //Coloca um hífen depois do bloco de quatro dígitos
  return v;
}
export function maskPhone(value: string) {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
}

export function maskCep(value: string) {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{5})(\d)/, "$1-$2");
  return value;
}

export function maskMoney(e: number) {
  if (!e) return;

  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
  };
  const formatNumber = new Intl.NumberFormat("pt-BR", options);
  return formatNumber.format(e);
}

export function removeDigitos(s: string) {
  if (!s) return "";
  const newValue = s.replace(/\D/g, "");

  return newValue;
}

export function removerCaracteresEspeciais(s: string) {
  if (!s) return;
  return s.replace(/[^a-zA-Z0-9]/g, "");
}

export function maskTime(time: string) {
  if (!time) return "";
  time = time.replace(/[^\dh:]/, "");
  time = time.replace(/^[^0-2]/, "");
  time = time.replace(/^([2-9])[4-9]/, "$1");
  time = time.replace(/^\d[:h]/, "");
  time = time.replace(/^([01][0-9])[^:h]/, "$1");
  time = time.replace(/^(2[0-3])[^:h]/, "$1");
  time = time.replace(/^(\d{2}[:h])[^0-5]/, "$1");
  time = time.replace(/^(\d{2}h)./, "$1");
  time = time.replace(/^(\d{2}:[0-5])[^0-9]/, "$1");
  time = time.replace(/^(\d{2}:\d[0-9])./, "$1");
  return time;
}

export function maskLimiteNumber(entrada: string, quantidade: number) {
  // Remove tudo que não seja número
  const apenasNumeros = entrada.replace(/\D/g, "");

  // Retorna apenas a quantidade especificada de números
  return apenasNumeros.substring(0, quantidade);
}

export function maskNiver(v: string) {
  let value = v;

  // Remove qualquer caractere que não seja número
  value = value.replace(/\D/g, "");

  // Adiciona as barras (/) para formatar a data
  if (value.length >= 3 && value.length <= 4) {
    value = `${value.slice(0, 2)}/${value.slice(2)}`;
  } else if (value.length > 4) {
    value = `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4, 8)}`;
  }

  // Limita a quantidade de caracteres para DD/MM/YYYY
  if (value.length > 10) {
    value = value.slice(0, 10);
  }

  return value;
}
