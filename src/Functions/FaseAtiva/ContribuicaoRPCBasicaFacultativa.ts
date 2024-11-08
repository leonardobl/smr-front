import { DefaultValueTable1 } from "../../Data/DeafaultValue/Table1";
import { IFormMainDTO } from "../../Types/formMain";
import { IFaseTableItem } from "../../Types/table";

export function formatDataContribuicaoRPCBasicaFacultativaFaseAtiva({
  data,
  salario_contribuicao_rpc,
}: {
  data: IFormMainDTO;
  salario_contribuicao_rpc: number;
}): IFaseTableItem {
  const com_migracao_rpc_facultativa =
    salario_contribuicao_rpc *
    (data.aliquota_contribuicao_rpps / 100 -
      data.aliquota_contribuicao_rpc / 100);

  return {
    ...DefaultValueTable1.contribuicao_RPC_facultativa,
    com_migracao_rpc_facultativa,
  };
}
