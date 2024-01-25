import { formatShortDate } from "@/utilities/formatDate";

import typework from "@/json/typework.json";
import service from "@/json/service.json";

export function convertWorkCode(workCode) {
  const index = typework.findIndex((item) => {
    return item.code === workCode;
  });
  return typework[index].work;
}
export function convertServiceCode(serviceCode) {
  const index = service.findIndex((item) => {
    return item.code === serviceCode;
  });
  return service[index].service;
}
export function convertTimeBooking(timeBooking) {
  return timeBooking === 1 ? "เช้า" : "บ่าย";
}
export function convertDate(dateBooking) {
  return formatShortDate(dateBooking);
  // return formatDateString(dateBooking);
}
export function convertStatus(status) {
  switch(status) {
    case 0:
      return 'นัดหมาย'
    case 1:
      return 'ยกเลิก'
    case 2:
      return ''
    default:
      return 'ผิดพลาด'
  }
}
