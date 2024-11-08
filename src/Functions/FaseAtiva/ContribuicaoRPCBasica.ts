import { DefaulValueTable1 } from "../../Components/Templates/HomeTemplate/useHome";
import { IFormMainDTO } from "../../Types/formMain";
import { ITypeFaseTable } from "../../Types/table";

export function formatDataContribuicaoRPCBasicaFaseAtiva({
  data,
}: {
  data: IFormMainDTO;
}): ITypeFaseTable {
  console.log(data);
  return { ...DefaulValueTable1.contribuicao_RPC_basica };
}
