import { IFormMainDTO } from "../../Types/formMain";
import { ITableFaseAtiva } from "../../Types/table";

export function IrFaseAtiva({
  data,
  setTable,
  table,
}: {
  data: IFormMainDTO;
  table: ITableFaseAtiva;
  setTable: React.Dispatch<React.SetStateAction<ITableFaseAtiva>>;
}) {
  const teste = { data, table, setTable };

  return teste;
}
