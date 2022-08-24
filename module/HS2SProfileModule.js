'use strict';

var {NativeModules} = require('react-native');

var RCTModule = NativeModules.HS2SProfileModule

/**
 * @module HS2SProfileModule
 */
module.exports = {

  ACTION_ERROR_HS: RCTModule.ACTION_ERROR_HS,
  ERROR_NUM_HS: RCTModule.ERROR_NUM_HS,
  ERROR_DESCRIPTION_HS: RCTModule.ERROR_DESCRIPTION_HS,

  ACTION_GET_DEVICE_INFO: RCTModule.ACTION_GET_DEVICE_INFO,
  HS_USER_COUNT: RCTModule.HS_USER_COUNT,
  HS_UNIT_CURRENT: RCTModule.HS_UNIT_CURRENT,

  ACTION_BATTERY_HS: RCTModule.ACTION_BATTERY_HS,
  BATTERY_HS: RCTModule.BATTERY_HS,

  ACTION_SET_UNIT_SUCCESS: RCTModule.ACTION_SET_UNIT_SUCCESS,

  ACTION_GET_USER_INFO: RCTModule.ACTION_GET_USER_INFO,
  USER_INFO_COUNT: RCTModule.USER_INFO_COUNT,
  USER_INFO_ARRAY: RCTModule.USER_INFO_ARRAY,
  USER_INFO_USER_ID: RCTModule.USER_INFO_USER_ID,
  USER_INFO_CREATE_TIME: RCTModule.USER_INFO_CREATE_TIME,
  USER_INFO_WEIGHT: RCTModule.USER_INFO_WEIGHT,
  USER_INFO_GENDER: RCTModule.USER_INFO_GENDER,
  USER_INFO_AGE: RCTModule.USER_INFO_AGE,
  USER_INFO_HEIGHT: RCTModule.USER_INFO_HEIGHT,
  USER_INFO_IMPEDANCE: RCTModule.USER_INFO_IMPEDANCE,
  USER_INFO_BODYBUILDING: RCTModule.USER_INFO_BODYBUILDING,

  ACTION_CREATE_OR_UPDATE_USER_INFO: RCTModule.ACTION_CREATE_OR_UPDATE_USER_INFO,
  OPERATION_STATUS: RCTModule.OPERATION_STATUS,
  OPERATION_DESCRIBE: RCTModule.OPERATION_DESCRIBE,

  ACTION_DELETE_USER_INFO: RCTModule.ACTION_DELETE_USER_INFO,

  ACTION_SPECIFY_USERS: RCTModule.ACTION_SPECIFY_USERS,

  ACTION_MEASURE_FINISH_AT_CRITICAL: RCTModule.ACTION_MEASURE_FINISH_AT_CRITICAL,

  ACTION_HISTORY_DATA_NUM: RCTModule.ACTION_HISTORY_DATA_NUM,
  HISTORY_DATA_USER_COUNT: RCTModule.HISTORY_DATA_USER_COUNT,
  HISTORY_DATA_COUNT_ARRAY: RCTModule.HISTORY_DATA_COUNT_ARRAY,
  HISTORY_DATA_COUNT: RCTModule.HISTORY_DATA_COUNT,

  ACTION_HISTORY_DATA: RCTModule.ACTION_HISTORY_DATA,
  DATA_ID: RCTModule.DATA_ID,
  DATA_WEIGHT: RCTModule.DATA_WEIGHT,
  DATA_IMPEDANCE: RCTModule.DATA_IMPEDANCE,
  DATA_USER_NUM: RCTModule.DATA_USER_NUM,
  DATA_GENDER: RCTModule.DATA_GENDER,
  DATA_AGE: RCTModule.DATA_AGE,
  DATA_HEIGHT: RCTModule.DATA_HEIGHT,
  DATA_MEASURE_TIME: RCTModule.DATA_MEASURE_TIME,
  DATA_RIGHT_TIME: RCTModule.DATA_RIGHT_TIME,
  DATA_BODYBUILDING: RCTModule.DATA_BODYBUILDING,
  DATA_INSTRUCTION_TYPE: RCTModule.DATA_INSTRUCTION_TYPE,
  DATA_BODY_FIT_PERCENTAGE: RCTModule.DATA_BODY_FIT_PERCENTAGE,
  DATA_MUSCLE_MASS: RCTModule.DATA_MUSCLE_MASS,
  DATA_BONE_SALT_CONTENT: RCTModule.DATA_BONE_SALT_CONTENT,
  DATA_BODY_WATER_RATE: RCTModule.DATA_BODY_WATER_RATE,
  DATA_PROTEIN_RATE: RCTModule.DATA_PROTEIN_RATE,
  DATA_SKELETAL_MUSCLE_MASS: RCTModule.DATA_SKELETAL_MUSCLE_MASS,
  DATA_BASAL_METABOLIC_RATE: RCTModule.DATA_BASAL_METABOLIC_RATE,
  DATA_VISCERAL_FAT_GRADE: RCTModule.DATA_VISCERAL_FAT_GRADE,
  DATA_PHYSICAL_AGE: RCTModule.DATA_PHYSICAL_AGE,
  DATA_BODY_MASS_INDEX: RCTModule.DATA_BODY_MASS_INDEX,

  DATA_STANDARD_WEIGHT: RCTModule.DATA_STANDARD_WEIGHT,
  DATA_WEIGHT_CONTROL: RCTModule.DATA_WEIGHT_CONTROL,
  DATA_MUSCLE_CONTROL: RCTModule.DATA_MUSCLE_CONTROL,
  DATA_FAT_CONTROL: RCTModule.DATA_FAT_CONTROL,
  DATA_FAT_WEIGHT: RCTModule.DATA_FAT_WEIGHT,
  DATA_DE_FAT_WEIGHT: RCTModule.DATA_DE_FAT_WEIGHT,

  ACTION_ONLINE_RESULT: RCTModule.ACTION_ONLINE_RESULT,
  ACTION_DELETE_HISTORY_DATA: RCTModule.ACTION_DELETE_HISTORY_DATA,

  ACTION_ANONYMOUS_DATA_NUM: RCTModule.ACTION_ANONYMOUS_DATA_NUM,
  ANONYMOUS_DATA_COUNT: RCTModule.ANONYMOUS_DATA_COUNT,

  ACTION_DELETE_ANONYMOUS_DATA: RCTModule.ACTION_DELETE_ANONYMOUS_DATA,
  ACTION_ONLINE_REAL_TIME_WEIGHT: RCTModule.ACTION_ONLINE_REAL_TIME_WEIGHT,
  ACTION_BODY_FAT_RESULT: RCTModule.ACTION_BODY_FAT_RESULT,
  DATA_BODY_FAT_RESULT: RCTModule.DATA_BODY_FAT_RESULT,

  ACTION_HS2S_LightUp_DEVICE: RCTModule.ACTION_HS2S_LightUp_DEVICE,
  HS2S_DEVICE_STATUS: RCTModule.HS2S_DEVICE_STATUS,

  ACTION_HS2S_MEASURE_HEARTRATE: RCTModule.ACTION_HS2S_MEASURE_HEARTRATE,
  HS2S_MEASURE_HEARTRATE_RESULT: RCTModule.HS2S_MEASURE_HEARTRATE_RESULT,
  ACTION_HS2S_EXIT_MEASURE_HEARTRATE_STATUS: RCTModule.ACTION_HS2S_EXIT_MEASURE_HEARTRATE_STATUS,

  ACTION_RESTORE_FACTORY_SETTINGS: RCTModule.ACTION_RESTORE_FACTORY_SETTINGS,

  ACTION_GET_ALL_CONNECTED_DEVICES: RCTModule.ACTION_GET_ALL_CONNECTED_DEVICES
}