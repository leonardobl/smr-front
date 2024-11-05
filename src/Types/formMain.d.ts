import { SexoEnum } from "../Enum/sexo";

export interface IFormMainDTO {
  nome: string;
  data_nascimento: string;
  sexo: SexoEnum;
  remuneracao_ativa_atual: number;
  beneficio_especial: number;
  prazo_recebimento_beneficio_rpc: string;
  idade_ingresso_ente_federativo: number;
  idade_prevista_aposentadoria: number;
  taxa_juros_anual: number;
  taxa_contribuicao_rpps: number;
  taxa_contribuicao_rpc: number;
  valor_teto_rgps: number;
  salario_contribuicao_rpc: number;
  indice_infl: number;
  indice_reajuste_beneficio_rpc: number;
  indice_reajuste_beneficio_rpps: number;
  indice_reajuste_paridade: number;
}
