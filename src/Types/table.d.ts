export interface IFaseTableItem {
  sem_migracao: number;
  com_migracao: number;
  com_migracao_rpc_basica: number;
  com_migracao_rpc_facultativa: number;
}

export interface ITableFaseAtiva {
  remuneracao: IFaseTableItem;
  contribuicao_RPPS: IFaseTableItem;
  contribuicao_RPC_basica: IFaseTableItem;
  contribuicao_RPC_facultativa: IFaseTableItem;
  soma_contribuicao: IFaseTableItem;
  salario_liquido_contribuicao: IFaseTableItem;
  ir: IFaseTableItem;
  remuneracao_liquida_ir: IFaseTableItem;
}

export interface ITableFaseBeneficio {
  beneficio_rpps: IFaseTableItem;
  beneficio_especial: IFaseTableItem;
  saldo_acumulado_rpc_basico: IFaseTableItem;
  beneficio_rpc_basico: IFaseTableItem;
  saldo_acumulado_rpc_facultativa: IFaseTableItem;
  beneficio_rpc_facultativa: IFaseTableItem;
  contribuicao_beneficio_RPPS: IFaseTableItem;
  saldo_liquido_ir: IFaseTableItem;
  ir_fase_beneficio: IFaseTableItem;
  remuneracao_liquida_ir_fase_beneficio: IFaseTableItem;
}
