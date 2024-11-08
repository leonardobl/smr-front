import { DefaultValueTable1 } from "../../Data/DeafaultValue/Table1";
import { IFormMainDTO } from "../../Types/formMain";
import { IFaseTableItem } from "../../Types/table";

export function formatDataContribuicaoRPCBasicaFaseAtiva({
  data,
  salario_contribuicao_rpc,
}: {
  data: IFormMainDTO;
  salario_contribuicao_rpc: number;
}): IFaseTableItem {
  const com_migracao_rpc_basica =
    salario_contribuicao_rpc * (data.aliquota_contribuicao_rpc / 100);
  const com_migracao_rpc_facultativa = com_migracao_rpc_basica;

  return {
    ...DefaultValueTable1.contribuicao_RPC_basica,
    com_migracao_rpc_basica,
    com_migracao_rpc_facultativa,
  };
}
