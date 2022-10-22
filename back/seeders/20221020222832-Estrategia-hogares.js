'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Estrategia_hogares', [
    {
      hogar_id:1,
      tres_meses_ganan_trabajo: 0,
      tres_meses_jubilacion: 0,
      tres_meses_indemnizacion: 1,
      tres_meses_seg_desempleo: 1,
      tres_meses_ayudasocial: 1,
      tres_meses_mercad_donadas: 0,
      tres_meses_mercad_familiar: 0,
      cobr_alquiler: 1,
      cobr_ganan_negocios: 0,
      cobr_inversiones: 0,
      cobr_becaestudio: 1,
      adem_gastarahorros: 1,
      adem_prest_familiares: 0,
      adem_prest_banco: 1,
      adem_compra_cuotas: 1,
      adem_vender_pertenencias: 0,
      adem_otros_ingresos_efec: 0,
      adem_menores_ayuda_trab: 1,
      adem_menores_ayuda_pidie: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      hogar_id:2,
      tres_meses_ganan_trabajo: 0,
      tres_meses_jubilacion: 0,
      tres_meses_indemnizacion: 1,
      tres_meses_seg_desempleo: 1,
      tres_meses_ayudasocial: 1,
      tres_meses_mercad_donadas: 0,
      tres_meses_mercad_familiar: 1,
      cobr_alquiler: 0,
      cobr_ganan_negocios: 1,
      cobr_inversiones: 0,
      cobr_becaestudio: 0,
      adem_gastarahorros: 0,
      adem_prest_familiares: 0,
      adem_prest_banco: 0,
      adem_compra_cuotas: 1,
      adem_vender_pertenencias: 0,
      adem_otros_ingresos_efec: 0,
      adem_menores_ayuda_trab: 1,
      adem_menores_ayuda_pidie: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      hogar_id:3,
      tres_meses_ganan_trabajo: 1,
      tres_meses_jubilacion: 1,
      tres_meses_indemnizacion: 1,
      tres_meses_seg_desempleo: 1,
      tres_meses_ayudasocial: 1,
      tres_meses_mercad_donadas: 1,
      tres_meses_mercad_familiar: 1,
      cobr_alquiler: 0,
      cobr_ganan_negocios: 0,
      cobr_inversiones: 0,
      cobr_becaestudio: 1,
      adem_gastarahorros: 1,
      adem_prest_familiares: 0,
      adem_prest_banco: 1,
      adem_compra_cuotas: 1,
      adem_vender_pertenencias: 0,
      adem_otros_ingresos_efec: 0,
      adem_menores_ayuda_trab: 1,
      adem_menores_ayuda_pidie: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      hogar_id:4,
      tres_meses_ganan_trabajo: 0,
      tres_meses_jubilacion: 1,
      tres_meses_indemnizacion: 1,
      tres_meses_seg_desempleo: 0,
      tres_meses_ayudasocial: 0,
      tres_meses_mercad_donadas: 1,
      tres_meses_mercad_familiar: 0,
      cobr_alquiler: 1,
      cobr_ganan_negocios: 0,
      cobr_inversiones: 0,
      cobr_becaestudio: 1,
      adem_gastarahorros: 1,
      adem_prest_familiares: 0,
      adem_prest_banco: 0,
      adem_compra_cuotas: 0,
      adem_vender_pertenencias: 0,
      adem_otros_ingresos_efec: 1,
      adem_menores_ayuda_trab: 0,
      adem_menores_ayuda_pidie: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: async (queryInterface) => {
     await queryInterface.bulkDelete('Estrategia_hogares', null, {
      truncate: true,
      cascade: false,
     });
  }
};