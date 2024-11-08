import { DefaulValueTable1 } from "../../Components/Templates/HomeTemplate/useHome";
import { IFormMainDTO } from "../../Types/formMain";
import { ITypeFaseTable } from "../../Types/table";

export function formatDataContribuicaoRPCBasicaFaseAtiva({
  data,
  salario_contribuicao_rpc,
}: {
  data: IFormMainDTO;
  salario_contribuicao_rpc: number;
}): ITypeFaseTable {
  const com_migracao_rpc_basica =
    salario_contribuicao_rpc * (data.aliquota_contribuicao_rpc / 100);
  const com_migracao_rpc_facultativa = com_migracao_rpc_basica;

  return {
    ...DefaulValueTable1.contribuicao_RPC_basica,
    com_migracao_rpc_basica,
    com_migracao_rpc_facultativa,
  };
}
