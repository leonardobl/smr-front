export function maskPercentage(v: string) {
  if (!v) return;

  // Remove tudo o que não é dígito
  v = v.replace(/\D/g, "");

  // Converte para número e limita entre 0 e 100
  const num = Math.min(100, parseInt(v, 10));

  // Retorna o valor com o símbolo de porcentagem
  return `${num}%`;
}
