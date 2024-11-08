import { DefaulValueTable1 } from "../../Components/Templates/HomeTemplate/useHome";
import { IFormMainDTO } from "../../Types/formMain";
import { ITypeFaseTable } from "../../Types/table";

export function formatDataContribuicaoRPPSFaseAtiva({
  data,
}: {
  data: IFormMainDTO;
}): ITypeFaseTable {
  const sem_migracao =
    (data.remuneracao_ativa_atual * data.aliquota_contribuicao_rpps) / 100;

  const com_migracao = Math.round(
    (data.aliquota_contribuicao_rpps / 100) *
      Math.min(data.remuneracao_ativa_atual, data.valor_teto_rgps)
  );

  const com_migracao_rpc_basica = com_migracao;
  const com_migracao_rpc_facultativa = com_migracao;

  return {
    ...DefaulValueTable1.contribuicao_RPPS,
    sem_migracao,
    com_migracao,
    com_migracao_rpc_basica,
    com_migracao_rpc_facultativa,
  };
}
