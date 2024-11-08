import { IFormMainDTO } from "../../Types/formMain";
import { ITableFaseAtiva } from "../../Types/table";

export function formatDataContribuicaoRPCBasicaFaseAtiva({
  data,
  setTable,
}: {
  data: IFormMainDTO;
  setTable: React.Dispatch<React.SetStateAction<ITableFaseAtiva>>;
}) {
  console.log(data);

  setTable((prev) => ({
    ...prev,
    contribuicao_RPC_basica: {
      ...prev.contribuicao_RPC_basica,
    },
  }));
}
