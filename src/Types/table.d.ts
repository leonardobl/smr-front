export interface ITypeFaseTable {
  sem_migracao: number;
  com_migracao: number;
  com_migracao_rpc_basica: number;
  com_migracao_rpc_facultativa: number;
}

export interface ITableFaseAtiva {
  remuneracao: ITypeFaseTable;
  contribuicao_RPPS: ITypeFaseTable;
  contribuicao_RPC_basica: ITypeFaseTable;
  contribuicao_RPC_facultativa: ITypeFaseTable;
  soma_contribuicao: ITypeFaseTable;
  salario_liquido_contribuicao: ITypeFaseTable;
  ir: ITypeFaseTable;
  remuneracao_liquida_ir: ITypeFaseTable;
}
