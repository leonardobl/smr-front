import { DefaulValueTable1 } from "./../../Components/Templates/HomeTemplate/useHome";
import { IFormMainDTO } from "../../Types/formMain";
import { ITypeFaseTable } from "../../Types/table";

export function formatDataContribuicaoRPCBasicaFacultativaFaseAtiva({
  data,
}: {
  data: IFormMainDTO;
}): ITypeFaseTable {
  console.log("data", data);
  return { ...DefaulValueTable1.contribuicao_RPC_facultativa };
}
