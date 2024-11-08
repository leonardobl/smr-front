import { DefaulValueTable1 } from "./../../Components/Templates/HomeTemplate/useHome";
import { IFormMainDTO } from "../../Types/formMain";
import { ITypeFaseTable } from "../../Types/table";

export function formatDataContribuicaoRPCBasicaFacultativaFaseAtiva({
  data,
  salario_contribuicao_rpc,
}: {
  data: IFormMainDTO;
  salario_contribuicao_rpc: number;
}): ITypeFaseTable {
  const com_migracao_rpc_facultativa =
    salario_contribuicao_rpc *
    (data.aliquota_contribuicao_rpps / 100 -
      data.aliquota_contribuicao_rpc / 100);

  return {
    ...DefaulValueTable1.contribuicao_RPC_facultativa,
    com_migracao_rpc_facultativa,
  };
}
